import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null);
    // const [isOpen, setIsOpen] = useState(false);
    // const [password, setPassword] = useState('');
    // const [messageNo, setMessages] = useState(0);

    //modalData 객체를 만들어서 관리
    const [modalData, setModalData] = useState({isOpen: false});

    useEffect(() => {
        setTimeout(() => {
            refForm.current && refForm.current.password.focus();
        }, 200);

    }, [modalData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            //패스워드가 비어있으면 통신X
            if(e.target.password.value === '') {
                return;
            }

            // const response = await fetch(`/api/${modalData.messageNo}`, {
            //     method: 'delete',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({password: modalData.password})
            // });

            // if(!response.ok) {
            //     throw `${response.status} ${response.statusText}`
            // }

            // const jsonResult = response.json;
            
            // 비밀번호가 틀린 경우
            // jsonResult.data가 null 인 경우
            setModalData({}, Object.assign(modalData), {label: '비밀번호가 일치하지 않습니다.', password:''} );

            // 잘 삭제가 된 경우
            // jsonResult.data가 10 인 경우
            setModalData({isOpen:false, password:''});
            notifyMessage.delete(modalData.messageNo)

        } catch(err){
            console.log(err);
        }

        //console.log("삭제!!!:", messageNo, ' ',e.target.password.value,' ', password);
        console.log("삭제!!!:", modalData);
    }
    const notifyDeleteMessage = (no) => {
        //setIsOpen(true);
        //setMessages(no);
        //setPassword('');

        setModalData({
            label: '작성시 입력했던 비밀번호를 입력 하세요.',
            isOpen: true,
            messageNo: no,
            password: ''
        });
    }

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message} 
                                                  notifyDeleteMessage={ notifyDeleteMessage }/>)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                onRequestClose={() => //setIsOpen(false)
                                    //setModalData({isOpen:false}) //새로운 객체로 대체한다 -> 기존객체가 사라진다
                                    //setModalData(Object.assign({}, modalData, {isOpen:false})) // Object.assign({}, o, {b:30}) 사용하여 기존객체 유지
                                    setModalData({isOpen:false}) //여기서는 처음 모달창이 켜지므로 isOpen 만 있어도 된다
                                }
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        ref={refForm} 
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit}>
                        <label>{   modalData.label || ''  }</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {password: e.target.value}))}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={() => {
                        
                        // 버튼 클릭시에 form태그의 submit 이벤트를 발생
                        refForm.current.dispatchEvent(new Event("submit", {
                                                                            cancelable: true,  //Whether the event will bubble up through the DOM or not
                                                                            bubbles: true      //Whether the event may be canceled or not
                                                                          }));
                    }}>확인</button>
                    <button onClick={() => {  setModalData(Object.assign({}, modalData, {isOpen:false})) }}>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}