import React, { useState, useEffect } from 'react'
import Header from './Header';
import { Line } from "react-chartjs-2";
import './App.css';
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
}from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const StepOne = (props) => {
    const data={
        labels:['Day1','Day2','Day3'],
        datasets:[{
            labels:'hahah',
            data:[12,6,9],
            backgroundColor:'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua',
            fill:true,
            tension:0.4
        }]
    }
    const options = {
        plugins:{
            legend:true
        },
        scales:{
            y:{
                //min:3,
                //max:6
            }
        }
    }
    return (
        <div>
            <Header />

            <div className="wrapper">
                <div className='sub-header'>
                    <div className="subheader-content">
                        <h1>Tracking Board</h1>
                        
                    </div>
                </div>
                <div className="body-container">
                    <h1>Depression Level over time</h1>
                    <p>Here you can review how mich depression level you have had over time</p>
                    <div style={
                        {
                            width: '600px',
                            height: '300px'
                        }
                    }>
                        
                        <Line
                            data={data}
                            options={options}
                        ></Line>

                    </div>
                </div>
            </div>    
        </div>
    );
}

export default StepOne;