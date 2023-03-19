import React, { useState, useEffect } from 'react'
import StepTwo from "./StepTwo";
import Header from './Header';
import './App.css';
const StepOne = (props) => {
    const [values, setValues] = useState({
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
    });
    const [total, setTotal] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: parseInt(value),
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const sum = values.q1 + values.q2 + values.q3 + values.q4 + values.q5;
        setTotal(sum);
        localStorage.setItem('myScore',sum);
    };
    console.log(total)


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

            <div className="body-container">

                

            <form  onSubmit={handleSubmit}>

                <fieldset data-require-one>
                    <div className="box-container-numbered">
                        <div>
                        <p className="numbered-subheading"> {lang === "English" ?
                                "1. In the pass 7 days, how much depression on average did you have?" :
                                "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}
                        </p>
                        </div>
                        <div class="MuiFormGroup-root MuiFormGroup-row">
                            <input type="radio" id="contactChoice1" name="q1" value="1" onChange={handleChange}/>
                            <label htmlFor="contactChoice1">No depressed</label>

                            <input type="radio" id="contactChoice2" name="q1" value="2" onChange={handleChange}/>
                            <label htmlFor="contactChoice2">Little depressed</label>

                            <input type="radio" id="contactChoice3" name="q1" value="3" onChange={handleChange}/>
                            <label htmlFor="contactChoice3">Moderate depressed</label>

                            <input type="radio" id="contactChoice4" name="q1" value="4" onChange={handleChange}/>
                            <label htmlFor="contactChoice4">Very depressed</label>

                            <input type="radio" id="contactChoice5" name="q1" value="5" onChange={handleChange}/>
                            <label htmlFor="contactChoice5">Extremely depressed</label>
                        </div>
                    </div>
                </fieldset>
                
                <fieldset data-require-one>
                    <div className="box-container-numbered">
                    <p className="numbered-subheading">{lang === "English" ?
                        "2. How often do you feel depressed in pass 7 days?" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}
                    </p>
                    <question>
                        <input type="radio" id="contactChoice6" name="q2" value="1" onChange={handleChange}/>
                        <label htmlFor="contactChoice6">Never</label>

                        <input type="radio" id="contactChoice7" name="q2" value="2" onChange={handleChange}/>
                        <label htmlFor="contactChoice7">Rarely</label>

                        <input type="radio" id="contactChoice8" name="q2" value="3" onChange={handleChange}/>
                        <label htmlFor="contactChoice8">Sometimes</label>

                        <input type="radio" id="contactChoice9" name="field2" value="4" onChange={handleChange}/>
                        <label htmlFor="contactChoice9">More than half of the days</label>

                        <input type="radio" id="contactChoice10" name="q2" value="5" onChange={handleChange}/>
                        <label htmlFor="contactChoice10">Almost every day</label>
                    </question>
                    </div>
                </fieldset>

                    <div className="box-container-numbered">
                <fieldset data-require-one>
                            <p className="numbered-subheading">  {lang === "English" ?
                        "3. Do you have trouble falling or staying asleep in pass 7 day?" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}</p>
                    <question>
                        <input type="radio" id="contactChoice11" name="q3" value="1" onChange={handleChange}/>
                        <label htmlFor="contactChoice11">Never</label>

                        <input type="radio" id="contactChoice12" name="q3" value="2" onChange={handleChange}/>
                        <label htmlFor="contactChoice12">Rarely</label>

                        <input type="radio" id="contactChoice13" name="q3" value="3" onChange={handleChange}/>
                        <label htmlFor="contactChoice13">Sometimes</label>

                        <input type="radio" id="contactChoice14" name="q3" value="4" onChange={handleChange}/>
                        <label htmlFor="contactChoice14">More than half of the days</label>

                        <input type="radio" id="contactChoice15" name="q3" value="5" onChange={handleChange}/>
                        <label htmlFor="contactChoice15">Almost every day</label>
                    </question>
                </fieldset>
                </div>

                    <div className="box-container-numbered">
                    <fieldset data-require-one>
                            <p className="numbered-subheading">{lang === "English" ?
                            "4. How much interest or pleasure in doing things" :
                            "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}
                        </p>
                        <question>
                            <input type="radio" id="contactChoice16" name="q4" value="1" onChange={handleChange}/>
                            <label htmlFor="contactChoice16">Never</label>

                            <input type="radio" id="contactChoice17" name="q4" value="2" onChange={handleChange}/>
                            <label htmlFor="contactChoice17">Rarely</label>

                            <input type="radio" id="contactChoice18" name="q4" value="3" onChange={handleChange}/>
                            <label htmlFor="contactChoice18">Sometimes</label>

                            <input type="radio" id="contactChoice19" name="q4" value="4" onChange={handleChange}/>
                            <label htmlFor="contactChoice19">More than half of the days</label>

                            <input type="radio" id="contactChoice20" name="q4" value="5" onChange={handleChange}/>
                            <label htmlFor="contactChoice20">Almost every day</label>
                        </question>
                    </fieldset>
                </div>

                <div className="box-container-numbered">
                
                <div className="box-container-numbered">
                <fieldset data-require-one>
                        <p className="numbered-subheading">{lang === "English" ?
                        "5. Do you feeling bad about your self?" :
                        "1. Au cours des sept derniers jours, quel niveau de douleur avez-vous ressenti en moyenne à cause de votre arthrite?"}</p>
                    <question>
                        <input type="radio" id="contactChoice21" name="q5" value="1" onChange={handleChange}/>
                        <label htmlFor="contactChoice21">Never</label>

                        <input type="radio" id="contactChoice22" name="q5" value="2" onChange={handleChange}/>
                        <label htmlFor="contactChoice22">Rarely</label>

                        <input type="radio" id="contactChoice23" name="q5" value="3" onChange={handleChange}/>
                        <label htmlFor="contactChoice23">Sometimes</label>

                        <input type="radio" id="contactChoice24" name="q5" value="4" onChange={handleChange}/>
                        <label htmlFor="contactChoice24">More than half of the days</label>

                        <input type="radio" id="contactChoice25" name="q5" value="5" onChange={handleChange}/>
                        <label htmlFor="contactChoice25">Almost every day</label>
                    </question>
                </fieldset>
                </div>
                </div>

                <div class="next-btn-container">
                    <button class="next-btn btn btn-secondary" type="button submit" name="Calculate" id="calculate" value="Calculate">Submit</button>
                </div>
            </form>
            </div>


        </div>
    );
}

export default StepOne;