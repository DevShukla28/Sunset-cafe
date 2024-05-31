/** @format */

import React from "react";
import "./card2.css";

const Card2 = () => {
  return (
    <>
      <swiper-container
        class="mySwiper"
        pagination="true"
        effect="coverflow"
        grab-cursor="true"
        centered-slides="true"
        slides-per-view="auto"
        coverflow-effect-rotate="50"
        coverflow-effect-stretch="0"
        coverflow-effect-depth="100"
        coverflow-effect-modifier="1"
        coverflow-effect-slide-shadows="true">
        <swiper-slide>
          <img src={"./Images/slide-1.png"} />
          <p>Beverages & salads</p>
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-2.png"} />
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-3.png"} />
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-4.png"} />
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-2.png"} />
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-1.png"} />
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-3.png"} />
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-4.png"} />
        </swiper-slide>
        <swiper-slide>
        <img src={"./Images/slide-1.png"} />
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default Card2;
