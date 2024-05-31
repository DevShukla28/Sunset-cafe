/** @format */
import React from 'react'
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import  './card4.css'

const Card4 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container">
        <div className="row " >
          <div className="col-md-10">
            <div className="text-slider mt-3">
              <Slider className="" {...settings}>
                <div className="menu1List-text-1">
                  <h4 >
                    <NavLink to="/Menu3" >BURGER & SANDWICHES</NavLink>
                  </h4>
                </div>

                <div className="menu1List-text-2">
                  <h4>
                    <NavLink to="/Menu4" activeClassName="active-link">CHINESE CUSINE</NavLink>
                  </h4>
                </div>

                <div className="menu1List-text-3">
                  <h4>
                    <NavLink to="/StartersMenu5">STARTERS</NavLink>
                  </h4>
                </div>

                <div className="menu1List-text-4">
                  <h4>
                    <NavLink to="/Sides">SIDES</NavLink>
                  </h4>
                </div>

                <div className="menu1List-text-5">
                  <h4>
                    <NavLink to="/menu5">SALADS</NavLink>
                  </h4>
                </div>

                <div className="menu1List-text-6">
                  <h4>
                    <NavLink to="/menu6">DESSERTS / ICE-CREAM</NavLink>
                  </h4>
                </div>

                <div className="menu1List-text-7">
                  <h4>
                    <NavLink to="/menu7">MAIN COURSE</NavLink>
                  </h4>
                </div>

                <div className="menu1List-text-8">
                  <h4>
                    <NavLink to="/menu8">VALUE COMBO</NavLink>
                  </h4>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card4;
