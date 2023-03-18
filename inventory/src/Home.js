import React, { useState, useEffect } from 'react'
import Header from './Header';
const Home = (props) => {
    return (
        <div>
            <div className="home-page-header">
                <Header current={props} />
            </div>
            <h1>this is home page</h1>

        </div>
    );
}

export default Home;