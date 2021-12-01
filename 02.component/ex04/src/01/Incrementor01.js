import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    onClickButton (e) {
        console.log(e);
        // this.state.value = this.state.value + this.props.step; - 안됨
        this.setState({
            val: this.state.val + this.state.step
        })
    }

    onClickButton2 (e) {
        // this.state.value = this.state.value + this.props.step; - 안됨
        this.setState({
            val: this.state.val - this.state.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={this.onClickButton2.bind(this)}>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}