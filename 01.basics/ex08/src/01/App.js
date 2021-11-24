import React from 'react';

/*
sq  screen
sqsq    
sqqsq
*/   
export default function() {
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1: HTML과 차이점</p>
            {/*
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫혀야 한다.
                오류) <br>, <hr>, <input type='text'>, <img src=''>
            */}
            <br/>
            <hr/>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cQnBQmJxWMbkM0GTrm0-7xTE3Jaje6k56wJz5izjLDGP6Y8LcedB2DQT39hGxn_CadU&usqp=CAU'/>
            {/*
                3. 속성 이름은 DOM API 기반이다.
                 <div id='box' class='box'>....</div>
                 document.getElementById('box').className = 'box'   
            */}
            <div id='box' className='box'>
                box 입니다.
            </div>
        </div>
    )
} 