import React from 'react'
import Header from './Header';
import './Home.css'; 
//import img1 from 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';
//import img2 from 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
//import img3 from 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg';

const Home = () => {
    
    localStorage.setItem('language',"English");
    let lang = localStorage.getItem("language");

    return (
        <div>
            <Header/>

            <div class="body-container">
              <div class="main-options">
                <div class="orangenext-btn-container">
                  <h1 class="maintitle">
                    {lang === "English" ?
                        "Why use the Happiness Checker?":
                        "Pourquoi utiliser le Happiness Checker ?"}</h1>
                  <div class="orangenext-btn-content"><a class="button" href="/StepOne">{lang==="English" ? "Next":"Suivant"}</a></div>
                </div>
                <div class="row">
                  <div class="box">
                    <div class="card">
                      <div class="card-img-container">
                        <img width="100%" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="main image one" class="cardImg card-img-top" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title-intro card-title">{lang==="English" ? "You have Depression" : "Vous souffrez de dépression"}</h5>
                        <div class="underline"></div>
                    <p class="card-text">
                    {lang === "English" ?
                                    "Research has documented many ways that depression can affect physical health, including the following:weight gain or loss, chronic pain, inflammation, sexual health sleeping, trouble sleeping and etc.It is better to get earlier care." :
                                    "La recherche a documenté de nombreuses façons dont la dépression peut affecter la santé physique, y compris les suivantes : gain ou perte de poids, douleur chronique, inflammation, santé sexuelle, sommeil, troubles du sommeil, etc. Il est préférable d'obtenir des soins plus tôt."}
                      
                      </p>
                      </div>
                    </div>
                 </div>
                 <div class="box">
                    <div class="card">
                      <div class="card-img-container">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="main image two" class="cardImg card-img-top" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title-intro card-title">{lang==="English" ? "What is depression":"Quelle est la dépression"}</h5>
                        <div class="underline"></div>
                    <p class="card-text">
                    {lang === "English" ?
                                    "Depression is classified as a mood disorder. It may be described as feelings of sadness, loss, or anger that interfere with a person everyday activities." :
                                    "La dépression est classée comme un trouble de l'humeur. Il peut être décrit comme des sentiments de tristesse, de perte ou de colère qui interfèrent avec les activités quotidiennes d'une personne."}
                      
                      </p>
                      </div>
                   </div>
                 </div>
                 <div class="box">
                    <div class="card">
                      <div class="card-img-container">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="main image three" class="cardImg card-img-top"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title-intro card-title">{lang==="English" ? "How to overcome depression":"Comment vaincre la dépression"}</h5>
                        <div class="underline"></div>
                    <p class="card-text">
                    {lang === "English" ?
                                    "You can drink hot water and do something that you are interested in. Try to communicate with other people and make more friends. Indeed, the best option is to buy our healing program, and we will serve you the best healing plan." :
                                    "Vous pouvez boire de l'eau chaude et faire quelque chose qui vous intéresse. Essayez de communiquer avec d'autres personnes et de vous faire plus d'amis. En effet, la meilleure option est d'acheter notre programme de guérison, et nous vous servirons le meilleur plan de guérison."}
                      
                      </p>
                    <p class="card-text"></p>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
            </div>
            <div class="next-btn-container">
              <div class="next-btn-content"><a class="button" href="/StepOne">{lang==="English" ? "Next":"Suivant"}</a></div>
              <br />
              <a>{lang === "English" ? "This page is designed by Gary, Vicky and Kaixi":"Cette page est conçue par Gary, Vicky et Kaixi"}</a>
            </div>

          </div>
    );
}

export default Home;