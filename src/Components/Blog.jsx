/** @format */

import React from "react";
import Slider from "react-slick";
import { AiFillStar } from "react-icons/ai";
import { LiaStarHalf } from "react-icons/lia";
import "./blog.css";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Footer from "../Footer";


function Blog() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const latest = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="body-4">
        <Layout page="Menu" style={{ backgroundColor: "red" }}>
          <div className="blog-wrapper">
            <div className="blog-container">
              <div className="blog-content blog-black-bg">
                <h3>SUNSET</h3>
                <div className="ourvisionHeader">
                  <h4>OUR VISION</h4>
                  <p>
                    To create a haven where every cup is a <br /> canvas,
                    painting moments of serenity <br /> and connection against
                    the backdrop of <br /> a setting sun.
                  </p>
                </div>
              </div>
              <hr style={{ borderColor: "#D16E43", margin: "2rem 0 0 0" }} />

              <div className="latest-blog-wrapper">
                <div className="blog-header">
                  <h2>LATEST BLOG POST</h2>

                  <div className="blog-latest-carosel">
                    <div className="slider-container-blog">
                      <Slider {...settings}>
                        <div className="carasel-img">
                          <img src={"./Images/chef.jpg"} alt="" />
                          <p>
                            Sip, Savor, Socialize: <br /> The Three S's of Café{" "}
                            <br />
                            Sunset. <br /> <br />{" "}
                            <h5>
                              <Link to="/Blog1">Found out More.</Link>
                            </h5>{" "}
                          </p>
                        </div>
                        <div className="carasel-img">
                          <img src={"./Images/music.jpg"} alt="" />
                          <p>
                            Sunset Sessions: Live Music, Lively Conversations at
                            Café Sunset. <br /> <br />{" "}
                            <h5>
                              <Link to="/Blog3">Found out More.</Link>
                            </h5>{" "}
                          </p>
                        </div>
                        
                        <div className="carasel-img">
                          <img src={"./Images/food.avif"} alt="" />
                          <p>
                            Café Sunset Chronicles: <br /> A Journey Through
                            Flavors and Moments. <br /> <br />
                            <h5>
                              <Link to="/Blog2">Found out More.</Link>
                            </h5>{" "}
                          </p>
                        </div>
                        <div className="carasel-img">
                          <img src={"./Images/sunset.jpeg"} alt="" />
                          <p>
                            Sipping Serenity: <br /> The Art of Sunset at Café
                            Sunset. <br /> <br />
                            <h5>
                              <Link to="/Blog4">Found out More.</Link>
                            </h5>{" "}
                          </p>
                        </div>
                       
                        <div className="carasel-img">
                          <img src={"./Images/seasonal.jpeg"} alt="" />
                          <p>
                            Bites of Bliss: <br /> The Sweet Symphony of Pastries at Café Sunset
                            <br /> 
                            <h5>
                              <Link to="/Blog5">Found out More.</Link>
                            </h5>{" "}
                          </p>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>

              <hr style={{ borderColor: "#D16E43" }} />

              <div className="feature-header">
                <h2>FEATURED REVIEW VIDEOS</h2>

                <div className="feature-slider">
                  <div className="slider-container2">
                    <Slider {...latest}>
                      <div className="ftureslider-Img">
                        <img src={"./Images/Rectangle 306.png"} alt="" />
                        <div className="starimg">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>

                        <h6>
                          Café Sunset is a hidden gem! The flavors are
                          absolutely exquisite, and the cozy atmosphere makes it
                          the perfect spot for a quiet coffee or a lively
                          gathering. The Sunset Chai is a must-try! Can't wait
                          to visit again." - Divya Soni.
                        </h6>

                        {/* view comment for mobile view */}

                        <button className="rviewBtn-MobileView">
                          View Comments
                        </button>
                      </div>
                      <div className="ftureslider-Img">
                        <img src={"./Images/Rectangle 307.png"} alt="" />

                        <div className="starimg">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <LiaStarHalf />
                        </div>

                        <h6>
                          The staff at Café Sunset goes above and beyond to make
                          you feel at home. The artistic vibes, from the décor
                          to the live performances, create a unique and
                          memorable experience. Highly recommended! - Sanowar
                          Khatun.
                        </h6>

                        {/* view comment for mobile view */}

                        <button className="rviewBtn-MobileView">
                          View Comments
                        </button>
                      </div>

                      <div className="ftureslider-Img">
                        <img src={"./Images/Rectangle 308.png"} alt="" />

                        <div className="starimg">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>

                        <h6>Its Was Very Delicious.</h6>

                        {/* view comment for mobile view */}

                        <button className="rviewBtn-MobileView">
                          View Comments
                        </button>
                      </div>

                      <div className="ftureslider-Img">
                        <img src={"./Images/Rectangle 309.png"} alt="" />

                        <div className="starimg">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <LiaStarHalf />
                        </div>

                        <h6>
                          The simplicity of the dishes lets the quality of the
                          noodles shine through. A must-visit for any noodle
                          lover!" - Ayusha.
                        </h6>

                        {/* view comment for mobile view */}

                        <button className="rviewBtn-MobileView">
                          View Comments
                        </button>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>

              <hr style={{ borderColor: "#D16E43" }} />

              <div className="blog-lst-sec">
                <h2>Share Your Experience !</h2>
                <p className="textNoneForMob">
                  Have you recently visited Café Sunset? We'd love to hear about
                  your experience!
                </p>
                <p>
                  Send your reviews and feedback and who knows – your review
                  might be featured here next!
                </p>
                <button className="rvwBtn">
                  Leave You Review Here....{" "}
                  <button className="blgsubBtn">SUBMIT</button>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-section-4">
            <Footer />
          </div>
        </Layout>
      </div>
    </>
  );
}
export default Blog;
