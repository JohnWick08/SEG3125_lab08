import React, { useState, useEffect } from 'react'
import StepTwo from "./StepTwo";
import Header from './Header';
import './App.css';
const StepOne = (props) => {
    let lang = localStorage.getItem("language");
    for (const fieldset of document.querySelectorAll("fieldset[data-require-one]")) {
        const updateValidity = () => {
            if ([...fieldset.elements].some(e => e.checked)) {
                fieldset.elements[0].setCustomValidity('');
            } else {
                fieldset.elements[0].setCustomValidity('Please answer this question!');
            }
        };
        fieldset.form.addEventListener("change", updateValidity);
        updateValidity();
    }

    return (
        <div className="StepOne">
            <Header/>
            <div className="wrapper">
                <div className='sub-header'>
                    <div className="subheader-content">
                        <h1>Questionnaire</h1>
                    </div>
                </div>
            </div>
            <form>
                    <fieldset data-require-one>
                    <legend> {lang === "English" ?
                        "1. In the pass 7 days, how much depression on average did you have?" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}</legend>
                    <question>
                        <input type="radio" id="contactChoice1" name="q1" value="1"/>
                        <label htmlFor="contactChoice1">No depressed</label>

                        <input type="radio" id="contactChoice2" name="q1" value="2"/>
                        <label htmlFor="contactChoice2">Little depressed</label>

                        <input type="radio" id="contactChoice3" name="q1" value="3"/>
                        <label htmlFor="contactChoice3">Moderate depressed</label>

                        <input type="radio" id="contactChoice4" name="q1" value="4"/>
                        <label htmlFor="contactChoice4">Very depressed</label>

                        <input type="radio" id="contactChoice5" name="q1" value="5"/>
                        <label htmlFor="contactChoice5">Extremely depressed</label>
                    </question>
                </fieldset>
                <br></br><br></br>
                <fieldset data-require-one>
                    <legend>{lang === "English" ?
                        "2. How often do you feel depressed in pass 7 days?" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}</legend>
                    <question>
                        <input type="radio" id="contactChoice6" name="q2" value="1"/>
                        <label htmlFor="contactChoice6">Never</label>

                        <input type="radio" id="contactChoice7" name="q2" value="2"/>
                        <label htmlFor="contactChoice7">Rarely</label>

                        <input type="radio" id="contactChoice8" name="q2" value="3"/>
                        <label htmlFor="contactChoice8">Sometimes</label>

                        <input type="radio" id="contactChoice9" name="q2" value="4"/>
                        <label htmlFor="contactChoice9">More than half of the days</label>

                        <input type="radio" id="contactChoice10" name="q2" value="5"/>
                        <label htmlFor="contactChoice10">Almost every day</label>
                    </question>
                </fieldset>
                <br></br><br></br>
                <fieldset data-require-one>
                    <legend>  {lang === "English" ?
                        "3. Do you have trouble falling or staying asleep in pass 7 day?" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}</legend>
                    <question>
                        <input type="radio" id="contactChoice11" name="q3" value="1"/>
                        <label htmlFor="contactChoice1">Never</label>

                        <input type="radio" id="contactChoice12" name="q3" value="2"/>
                        <label htmlFor="contactChoice2">Rarely</label>

                        <input type="radio" id="contactChoice13" name="q3" value="3"/>
                        <label htmlFor="contactChoice3">Sometimes</label>

                        <input type="radio" id="contactChoice14" name="q3" value="4"/>
                        <label htmlFor="contactChoice4">More than half of the days</label>

                        <input type="radio" id="contactChoice15" name="q3" value="5"/>
                        <label htmlFor="contactChoice5">Almost every day</label>
                    </question>
                </fieldset>
                <br></br><br></br>
                <fieldset data-require-one>
                    <legend>{lang === "English" ?
                        "4. How much interest or pleasure in doing things" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}</legend>
                    <question>
                        <input type="radio" id="contactChoice16" name="q4" value="1"/>
                        <label htmlFor="contactChoice1">Never</label>

                        <input type="radio" id="contactChoice17" name="q4" value="2"/>
                        <label htmlFor="contactChoice2">Rarely</label>

                        <input type="radio" id="contactChoice18" name="q4" value="3"/>
                        <label htmlFor="contactChoice3">Sometimes</label>

                        <input type="radio" id="contactChoice19" name="q4" value="4"/>
                        <label htmlFor="contactChoice4">More than half of the days</label>

                        <input type="radio" id="contactChoice20" name="q4" value="5"/>
                        <label htmlFor="contactChoice5">Almost every day</label>
                    </question>
                </fieldset>
                <br></br><br></br>
                <fieldset data-require-one>
                    <legend>{lang === "English" ?
                        "5. Do you feeling bad about your self?" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}</legend>
                    <question>
                        <input type="radio" id="contactChoice21" name="q5" value="1"/>
                        <label htmlFor="contactChoice1">Never</label>

                        <input type="radio" id="contactChoice22" name="q5" value="2"/>
                        <label htmlFor="contactChoice2">Rarely</label>

                        <input type="radio" id="contactChoice23" name="q5" value="3"/>
                        <label htmlFor="contactChoice3">Sometimes</label>

                        <input type="radio" id="contactChoice24" name="q5" value="4"/>
                        <label htmlFor="contactChoice4">More than half of the days</label>

                        <input type="radio" id="contactChoice25" name="contact" value="5"/>
                        <label htmlFor="contactChoice5">Almost every day</label>
                    </question>
                </fieldset>
                <br></br>
                <div>
                    <button class="button-3" type="submit">Submit</button>
                </div>
            </form>

        </div>
    );
}

export default StepOne;