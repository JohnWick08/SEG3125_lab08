import React from 'react'
import Header from './Header';
import './Home.css'; 
//import img1 from 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';
//import img2 from 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
//import img3 from 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg';

const Home = () => {
    return (
        <div>
            <Header/>

            <div class="body-container">
              <div class="main-options">
                <div class="orangenext-btn-container">
                  <h1 class="maintitle">Why use the Happiness Checker?</h1>
                  <div class="orangenext-btn-content"><a class="button" href="/StepOne">Next</a></div>
                </div>
                <div class="row">
                  <div class="box">
                    <div class="card">
                      <div class="card-img-container">
                        <img width="100%" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="main image one" class="cardImg card-img-top" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title-intro card-title">You have Depression</h5>
                        <div class="underline"></div>
                    <p class="card-text">This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.</p>
                      </div>
                    </div>
                 </div>
                 <div class="box">
                    <div class="card">
                      <div class="card-img-container">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="main image two" class="cardImg card-img-top" />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title-intro card-title">What is depression</h5>
                        <div class="underline"></div>
                    <p class="card-text">This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.</p>
                      </div>
                   </div>
                 </div>
                 <div class="box">
                    <div class="card">
                      <div class="card-img-container">
                        <img width="100%" src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg" alt="main image three" class="cardImg card-img-top"/>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title-intro card-title">How to overcome depression</h5>
                        <div class="underline"></div>
                    <p class="card-text">This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.This is a place Holder, a placeholder.</p>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
            </div>
            <div class="next-btn-container">
              <div class="next-btn-content"><a class="button" href="/StepOne">Next</a></div>
              <br />
              <a>This page is designed by Gary, Vicky and Kaixi</a>
            </div>

          </div>
    );
}

export default Home;