/** @format */

import React from "react";
import "./product.css"

const Product = (props) => {
  return (
    <>
      <div className=" card">
        <img className="product--image ms-0"  src={props.url} alt="" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
       
      </div>
    </>
  );
};

export default Product;
