import React, { useState, useEffect } from 'react'
import Header from './Header';
import './App.css';
const StepOne = (props) => {


    return (
        <div>
            <Header/>

            
            <div className="wrapper">
                <div className='sub-header'>
                    <div className="subheader-content">
                        <h1>Questionare</h1>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default StepOne;