import React, { useState, useEffect } from 'react'
import Header from './Header';
import './App.css';
const StepTwo = (props) => {
    let lang = localStorage.getItem("language");
    const score = parseInt(localStorage.getItem('myScore'));
    let imageSource;
    let recommandation;
    let level;

    if (lang==="English"){
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
            recommandation="Take a deep breath. Please remember that you’re capable, brave and loved – even when it feels like you’re not."
        } else if (score >= 16 && score < 21) {
            imageSource = '../images/level4.jpg';
            level= "4 Extreme Depress"
            recommandation="You can try meditation to help you relax. Just a reminder: it is NOT selfish to put your recovery first. Rather, it’s necessary in order to make sure that everything else doesn’t come last."
        } else {
            imageSource = '../images/level5.jpg';
            level= "5 Extreme Depress"
            recommandation="Love yourself! Even the darkest hour only has 60 minutes."
        }
    }else{
        if (score >= 0 && score < 6){
            imageSource = '../images/level1.jpg';
            level= "1 Pas d'enfoncement"
            recommandation="Bien joué! Continuer!"
        } else if (score >= 6 && score < 11) {
            imageSource = '../images/level2.jpg';
            level= "2 Dépression modérée"
            recommandation="Allez-y doucement! Vous pouvez faire quelques excises pour vous détendre."
        } else if (score >= 11 && score < 16) {
            imageSource = '../images/level3.jpg';
            level= "3 Dépression modérée"
            recommandation="Respirez profondément. N'oubliez pas que vous êtes capable, courageux et aimé - même quand vous avez l'impression que vous ne l'êtes pas."
        } else if (score >= 16 && score < 21) {
            imageSource = '../images/level4.jpg';
            level= "4 Dépression extrême"
            recommandation="Vous pouvez essayer la méditation pour vous aider à vous détendre. Juste un rappel : ce n'est PAS égoïste de mettre votre rétablissement en premier. Au contraire, c'est nécessaire pour s'assurer que tout le reste ne vient pas en dernier."
        } else {
            imageSource = '../images/level5.jpg';
            level = "5 Dépression extrême"
            recommandation = "Aime toi toi-même! Même l'heure la plus sombre n'a que 60 minutes."
        }
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
                    <p>{lang === "English" ? "According to Your input, your level of depression is: ": "Selon vos commentaires, votre niveau de dépression est: "} <b>{level}</b></p>
                </div>
            <br></br>

            <div className='realpic' >
                <img className="result" src={imageSource} alt={`Image for score ${score}`}/>
            </div>
            <br></br> <br></br> <br></br>
            <div class='center'>
                <p class="centerp">{lang === "English" ? "Recommendation:" :"Recommandation"}</p>
                   <p class="recommandation"> {recommandation}</p>
            </div>
        </div>

    );
}

export default StepTwo;