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
            <p>{localStorage.getItem('myScore')}</p>
        </div>
    );
}

export default StepTwo;