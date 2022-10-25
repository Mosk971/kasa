import React from "react";
import './Intro.css';
import homeBackground from "../../assets/images/homeBackground.png";

function Intro() {
  return (    
      <section className="homeIntro">
        <div className="homeIntroContainer">
            <div className="homeIntroBackground">
                <img src={homeBackground} alt="Mountains range" />
                <div className="titleContainer">
                  <h1 className="introTitle">Chez vous, partout et ailleurs</h1>
                </div>
            </div>
            
        </div>     
      </section>
    
  );
}

export default Intro;