import React from "react";
import { useState } from 'react';


import "./Slider.css";



function Slider( { imageSlider } ) {

    // Setting up the slider state
    const [ index, setIndex ] = useState(0);

    // function nextSlide move to next image
    function nextSlide() { 
        setIndex((oldIndex) => {
            if(oldIndex === imageSlider.length-1) 

            {  oldIndex = 0; } 
            else
             
            { oldIndex = oldIndex + 1; }

            return oldIndex;
        })
    };

    //function previousSlide move to the previous image
    function previousSlide() {
        setIndex((oldIndex) => {
            if(oldIndex <= 0) 

            { oldIndex = (imageSlider.length-1); } 

            else { oldIndex = oldIndex - 1; }

            return oldIndex;
        })
    };

    // show based on number of images
    if (imageSlider.length === 1) {
        return (
            <div className="slider">
                <img src={imageSlider[index]} alt="Logement disponible"/> 
            </div>
        );
    } else {
        return (
            <div className="slider">
                <img src={imageSlider[index]} alt="Logement disponible"/> 
                <button id="previous" onClick={previousSlide}>{"<"}</button>
                <button id="next" onClick={nextSlide}>{">"}</button>
                <span className="countImage">{index + 1 + "/" + (imageSlider.length)}</span>
            </div>
        )
    } 

}

export default Slider;
