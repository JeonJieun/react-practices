import React, { Component } from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    render() {
        return (
            <div className="clock-field">
                <div className="numbers">
                    <p className="hours">10</p>
                    <p className="placeholder"></p>
                    <p className="type">hour</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p className="minutes">20</p>
                    <p className="placeholder"></p>
                    <p className="type">minute</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p className="seconds">45</p>
                    <p className="placeholder"></p>
                    <p className="type">second</p>
                </div>
                <div className="am-pm">
                    <div>
                        <p className={ 'am light-on'   }>am</p>
                    </div>
                    <div>
                        <p className={ 'pm' }>pm</p>
                    </div>
                </div>
            </div>
        );
    }
}