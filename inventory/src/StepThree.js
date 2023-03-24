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
    let lang = localStorage.getItem("language");
    const [myList, setMyList] = useState([]);
    const [myLabels, setMyLabels] = useState([]);
    useEffect(() => {
        //console.log(localStorage.getItem('numOfEntries'));
        for (var a = 0; a <= Number(localStorage.getItem('numOfEntries')); a++) {
            console.log(a+": "+localStorage.getItem('myScore' + a));
            myLabels.push('Day'+a)
            myList.push( Number(localStorage.getItem('myScore' + a)));
        }
        console.log(myList)
    }, []);
    const data={
        labels: myLabels,
        datasets:[{
            labels:'hahah',
            data:myList,
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
                min:0,
                max:30
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
                    <h1>{lang === "English" ? "Depression Level over time" : "Niveau de dépression au fil du temps"}</h1>
                    <p>{lang === "English" ? "Here you can review how mich depression level you have had over time" : "Ici, vous pouvez revoir votre niveau de dépression au fil du temps"}</p>
                    <div style={
                        {
                            width: '1200px',
                            height: '550px'
                        }
                    }>
                        
                        <Line
                            data={data}
                            options={options}
                        ></Line>

                    </div>
                </div>
            </div>   
            <p>{(localStorage.getItem('myScor')===null)}</p> 
        </div>
    );
}

export default StepOne;