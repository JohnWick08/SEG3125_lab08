import React, { useState, useEffect } from 'react'
import Header from './Header';
import './App.css';
const StepTwo = (props) => {

    const score = parseInt(localStorage.getItem('myScore'));
    let imageSource;
    let recommandation;
    let level;

    if (score >= 0 && score < 6){
        imageSource = '../images/level1.jpg';
        level= "1 No Depress"
        recommandation="Well done! Keep going!"
    } else if (score >= 6 && score < 11) {
        imageSource = '../images/level2.jpg';
        level= "2 Moderate Depress"
        recommandation="Take it easy! You can do some excise to relax."
    } else if (score >= 11 && score < 16) {
        imageSource = '../images/level3.jpg';
        level= "3 Moderate Depress"
        recommandation="Take a deep breath. Please remember that you’re capable, brave and loved – even when it feels like you’re not. "
    } else if (score >= 16 && score < 21) {
        imageSource = '../images/level4.jpg';
        level= "4 Extreme Depress"
        recommandation="You can try meditation to help you relax. Just a reminder: it is NOT selfish to put your recovery first. Rather, it’s necessary in order to make sure that everything else doesn’t come last."
    } else {
        imageSource = '../images/level5.jpg';
        level= "5 Extreme Depress"
        recommandation="Love yourself! Even the darkest hour only has 60 minutes."
    }

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
            <div class="box-container-numbered"></div>

                <div className='numbered-subheading' float='left'>
                    <p>According to Your input, your level of depression is: <b>{level}</b></p>
                </div>
            <br></br>

            <div className='realpic' >
                <img className="result" src={imageSource} alt={`Image for score ${score}`}/>
            </div>
            <br></br> <br></br> <br></br>
            <div class='center'>
                <p class="centerp">Recommendation:</p>
                   <p class="recommandation"> {recommandation}</p>
            </div>
        </div>

    );
}

export default StepTwo;