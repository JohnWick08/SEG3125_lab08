import React, { useState, useEffect } from 'react'
import Header from './Header';
import './App.css';
const StepTwo = (props) => {


    return (
        <div>
            <Header />

            <div className="wrapper">
                <div className='sub-header'>
                    <div className="subheader-content">
                        <h1>Result Analysis</h1>
                    </div>
                </div>
            </div>
            <div className='pic' margin='auto'>
                <div className='realpic' float='left'>
                    <img src='./images/level1.jpg' width='50%'></img>
                </div>
                <div className='intropic' float='left'>
                    <p>According to Your input,your level of depression is: <b>5 Extreme Depress</b></p>
                </div>
            </div>
            <p>{localStorage.getItem('myScore')}</p>
        </div>
    );
}

export default StepTwo;