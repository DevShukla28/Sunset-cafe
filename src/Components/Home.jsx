/** @format */

import React from "react";
import "./Home.css";
import Product from "./Product";
import Card from "./Card";
import Carousal from "./Carousal";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productdata, responsive, cardData } from "./data";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Layout from "./Layout";

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const Home = () => {
  return (
    <>
      <Layout page="home">
        <div className="container-fluid bg-image">
          <div className="row">
            <div className="grey-box"></div>
            <div className="col-md-7 ">
              <div className="left-part">
                <h1>Welcome</h1>
                <p3>
                  Discover Culinary Elegance at Café Sunset: Where Every Sip and
                  Bite Unveils a Symphony of Flavors and Moments.
                </p3>
                <h5>Gateway to Serenity, Culinary Delights,</h5>
                <p4>
                  Step into a World Where Ambiance, Flavor, and Warmth
                  Converge—A Haven Where Every Visit Feels Like Coming Home.
                </p4>
                <button type="button" className="btn btn-secondary">
                  Order Now
                </button>
              </div>
            </div>
            <div className="col-md-5 mt-5 ">
              <div className="right--part ">
                <h1>we are known for :-</h1>
                <Carousel responsive={responsive}>
                  {productdata.map((item) => (
                    <Product
                      // key={item.id}
                      url= {item.imageurl}
                      name= {item.name}
                      description ={item.description}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="second-sec ">
            <div className="row ">
              <div className="col-md-6 mt-5 ps-5">
                <h4>About US</h4>
                <h1>The story behind sunset ...</h1>
                <p>
                  Welcome to Sunset Café, where our journey began with Chef
                  André's bold decision to depart from the world of haute
                  cuisine and create a culinary sanctuary rooted in simplicity
                  and heartfelt connection. <br />
                  <br />
                  Inspired by a chance encounter with a charming café bathed in
                  the warm glow of twilight,Chef André envisioned a place where
                  genuine hospitality and exceptional flavors intertwine. At
                  Sunset Café, each dish is a reflection of Chef André's
                  dedication to crafting culinary experiences that nourish both
                  body and soul.
                </p>
                <button type="button" className="btn-1 mt-5 ">
                  <NavLink to="">Read More</NavLink>
                </button>
              </div>

              <div className="col-md-6 mt-5 ">
                <img src={"./Images/chef.jpeg"} alt="" />
              </div>
            </div>
          </div>
          {/* 3rd section */}
          <div className="third-sec">
            <h2 className="heading">DEALS & OFFERS</h2>
            <div className="row third-part">
              <div className="col-12">
                <Slider {...settings}>
                  {cardData.map((item) => (
                    <Card
                      // key={item.id}
                      imageurl={item.imageurl}
                      off={item.off}
                      price={item.price}
                      code={item.code}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="fourth-sec">
            <div className="row">
              <div className="col-md-6">
                <img src={"./Images/form-img.jpeg"} alt="" />
              </div>
              <div className="col-md-6 mt-5 ps-5 form ">
                <h1 className="header">Reservation</h1>
                <h1 className="Sub-heading">BOOK A TABLE ONLINE</h1>

                <input type="text" placeholder=" Your Name" className="Form" />
                <input
                  type="email"
                  placeholder=" Your Email"
                  className="Form-email"
                />
                <div className="w-100"></div>
                <input type="" placeholder=" Date & Time" className="Form-date" />
                <input
                  type="Number"
                  placeholder=" No of People"
                  className="Form-people"
                />
                <select className="option" name="numbers" id="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <div className="w-100"></div>

                <input
                  type=""
                  placeholder=" Special Request"
                  className="Form-des"
                />
                <div className="w-100"></div>
                <button className="btn-btn">Book Now</button>
              </div>
            </div>
          </div>
          <div className="fifth-sec  bg--img">
            <div className="black-box"></div>
            <div className="row">
              <div className="col-md-12">
                <Carousal />
              </div>
            </div>
          </div>
          <div className="row sec-6">
            <h2>Subscribe To Newsletter</h2>
            <h3>and Get -20% off</h3>
            <p>
              Your Gateway to Serenity, Culinary Delights, and Unforgettable{" "}
              <br /> Moments.
            </p>

            <input placeholder="Enter Your Email" type="email" />
            <button>Subscribe</button>
          </div>
          <Footer/>
        </div>
      </Layout>
    </>
  );
};

export default Home;
