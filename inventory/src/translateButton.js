import React, {useState, useEffect} from 'react';

import "./App.css"

let lang = localStorage.getItem("language")



if (lang == null) {
    localStorage.setItem("language", "English")
}


// console.log(localStorage)
// console.log(lang)

const TranslateButton = () => {
    const [status, setStatus] = useState(lang)

    const handleClickEN = () => {
        localStorage.setItem("language", "English")
        setStatus('English')
        window.location.reload()
    }

    const handleClickFR = () => {
        localStorage.setItem("language", "French")
        setStatus('French')
        window.location.reload()
    }

    return (
        <div className='translate-btn'>
            <div className="translate-btn-container">
                {status === 'English'  && <button className="translate-btn-english" onClick={handleClickFR}>Français</button>}
                {status === 'French' && <button className="translate-btn-french" onClick={handleClickEN}>English</button>}
            </div>
        </div>
    );
}

export default TranslateButton