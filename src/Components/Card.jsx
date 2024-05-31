/** @format */

import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className=" Card ">
        <img className="Card--image ms-0" src={props.imageurl} alt="" />
        <h2 className="flat">Flat</h2>
        <h1 className="Off">{props.off} <br />OFF</h1>
        <price className="Price">On order above {props.Price}</price>
        <button className="button"> Use code <strong>{props.code}</strong></button>
      </div>
     
    </>
  );
};

export default Card;
