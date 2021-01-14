import React from 'react';
import '../menu/Menu.css'

const About = ({backToMenu}) => {
    return(
        <div className="container">
            <div className="about-title">
                Twórcy
            </div>
            <div className="my-text">
                Wojciech Kajstura
                <br/>
                Konrad Lubera
            </div>
            <div className="about-title">
                Przedmiot
            </div>
            <div className="my-text">
                Mobilne aplikacje webowe
            </div>
            <div className="menu-button" onClick={() => backToMenu()}>
                Back to menu
            </div>
        </div>
    )
}

export default About;
