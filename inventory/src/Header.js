import {Link} from 'react-router-dom';
import React from 'react';
import { useLocation, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    const location = useLocation();
    return (
        <div>
            {(location.pathname === "/")&&
            <div className='home-header'>
                <div className="home-logo-header">
                    <Link style={{ display: 'flex', justifyContent: 'center', flexGrow: '1' }} to="/">
                        <img className="logo-home" alt="logo" src="https://images.barrons.com/im-424346?width=639&height=426"/>
                    </Link>
                    <div>
                        <div className="home-logo-header-translation"> 
                            <button class = "Button">English</button> 
                        </div>
                    </div>
                </div>
                <div className='sub-header'>
                    <div className="home-subheader-content">
                        <h1>Managing Mental Health in Happiness Checker</h1>
                    </div>
                </div>
            </div>
            }
            <div className="header">
                {(location.pathname !== "/" ) &&
                    <div className={"header-container"}>
                        <div className='main-container'>
                            <div>
                                <div className="tab-nav-header-translation"> <button class="Button">English</button> </div>
                            </div>
                            <NavLink to="/">
                                <img className="logo-link" alt="logo" src="https://images.barrons.com/im-424346?width=639&height=426" />
                            </NavLink>
                        </div>
                        <ul className="tab-nav-header">
                            <div className="tab-steps">


                                <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='/StepOne'>
                                    <p>Questionnaire</p>
                                    <div className="tab-navlink-div">
                                        <h2>1</h2>
                                    </div>
                                </NavLink>



                                <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='/StepTwo'>
                                    <p>Result Analysis</p>
                                    <div className="tab-navlink-div">
                                        <h2>2</h2>
                                    </div>
                                </NavLink>

                                <NavLink className="tab-nav-header-item tab-nav-header-navlink" to='/StepThree'>
                                    <p>Tracking Board</p>
                                    <div className="tab-navlink-div">
                                        <h2>3</h2>
                                    </div>
                                </NavLink>

                            </div>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}

export default Header;

{/* <nav className = "navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/StepOne">StepOne</Link>
            </div>
        </nav> */}