/** @format */

import React, { useState } from "react";
import "./card3.css"; // Import the CSS file for styling
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const images = [
  "./Images/burger.png",
  "./Images/pepsi.png",
  "./Images/imgg6.png",
  "./Images/imgg5.png",
  "./Images/cup-tea.png",
  "./Images/burger.png",
];

const Card3 = () => {
  const [counter, setCounter] = useState(0);

  const goPrev = () => {
    setCounter(
      (prevCounter) => (prevCounter - 1 + images.length) % images.length
    );
  };

  const goNext = () => {
    setCounter((prevCounter) => (prevCounter + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${counter * 20}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${
              image === "./Images/pepsi.png" ? "pepsi" : ""
            }`}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <buttonn id="prevBtn" onClick={goPrev}>
       <ArrowBackIosIcon style={{ fontSize: 50 }}/>
      </buttonn>
      <buttonn id="nextBtn" onClick={goNext}>
       <ArrowForwardIosIcon style={{ fontSize: 50 }}/>
      </buttonn>
    </div>
  );
};

export default Card3;
