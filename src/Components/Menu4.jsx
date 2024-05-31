/** @format */

import React from "react";
// import Slider from "react-slick";
import Layout from "./Layout";
import { FaPlus } from "react-icons/fa6";
import { BsArrowDownCircle } from "react-icons/bs";
import "./menu4.css";
import Card4 from "./Card4";
import Footer from "../Footer";

function ChineseMenu2() {
  return (
    <>
      <main>
        <Layout page="Menu">
          <div className="menu2Chinese-wrapper">
            <div className="menu2-bgImg">
              <img src={"./Images/gobhi mach.png"} alt="" />
            </div>

            <div className="chineseMenu2-wrapper">
              <div className="chineseMenu2-container">
                <div className="chineseMenu2-itemName-caraosel">
                  <div className="slider-container .menu2List-text">
                    <Card4 />
                  </div>
                </div>

                <div className="Appetizers-wrapper">
                  <div className="appetizersSection-Left">
                    <div className="appertHeader-Text">
                      <h4>APPETIZERS</h4>
                    </div>

                    <div className="appetizersLists-wrapper">
                      <div className="appetizers-Category">
                        <div className="appetizers-conteriner">
                          <div className="appetizers-header-Rs">
                            <h4>Spring Rolls Trio</h4>
                            {/* for Mob View */}
                            <h5>Spring Rolls Trio</h5>
                            <span>159/-</span>
                          </div>

                          <div className="TwoBtn-CircleAdd">
                            <div className="appetCircle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="appetAddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="SoupHeader-Text">
                        <h4>SOUPS</h4>
                      </div>

                      <div className="Soup-conteriner">
                        <div className="Soup-header-Rs">
                          <h4>Hot and Sour Soup</h4>
                          {/* for Mob View */}
                          <h5>Hot and Sour Soup</h5>
                          <span>149/-</span>
                        </div>

                        <div className="TwoBtn-CircleAdd">
                          <div className="appetCircle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="appetAddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Soup-conteriner">
                        <div className="Soup-header-Rs">
                          <h4>Wonton Noodle Soup</h4>
                          {/* for Mob View */}
                          <h5>Wonton Noodle Soup</h5>
                          <span>139/-</span>
                        </div>

                        <div className="TwoBtn-CircleAdd">
                          <div className="appetCircle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="appetAddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      {/* main profile */}

                      <div className="MainCourseHeader-Text">
                        <h4>MAIN COURSE</h4>
                      </div>

                      <div className="MainCourse-conteriner">
                        <div className="MainCourse-header-Rs">
                          <h4>Sichuan Chicken with Broccoli</h4>
                          {/* for Mob View */}
                          <h5>
                            Sichuan Chicken <br />
                            with Broccoli
                          </h5>
                          <span>149/-</span>
                        </div>

                        <div className="TwoBtn-CircleAdd">
                          <div className="appetCircle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="appetAddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="MainCourse-conteriner">
                        <div className="MainCourse-header-Rs">
                          <h4>Cantonese Vegetable Chow Mein</h4>
                          {/* for Mob View */}
                          <h5>
                            Cantonese Vegetable <br /> Chow Mein
                          </h5>
                          <span>139/-</span>
                        </div>

                        <div className="TwoBtn-CircleAdd">
                          <div className="appetCircle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="appetAddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr
                    style={{
                      height: "65vh",
                      border: "1px solid #F6FA11",
                      marginTop: "7rem",
                      marginBottom: "5rem",
                    }}
                  />

                  <div className="RiceNoodles-SectionRight">
                    <div className="RiceNoodles-Text">
                      <h4>RICE & NOODLES</h4>
                    </div>

                    <div className="RiceNoodles-wrapper">
                      <div className="RiceNoodles-Category">
                        <div className="RiceNoodles-conteriner">
                          <div className="RiceNoodles-header-Rs">
                            <h4>Yangzhou Fried RicE</h4>
                            {/* for Mob View */}
                            <h5>Yangzhou Fried RicE</h5>
                            <span>149/-</span>
                          </div>

                          <div className="TwoBtn-CircleAdd">
                            <div className="appetCircle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="appetAddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="RiceNoodles-conteriner">
                          <div className="RiceNoodles-header-Rs">
                            <h4>Dan Dan Noodles</h4>
                            {/* for Mob View */}
                            <h5>Dan Dan Noodles</h5>
                            <span>139/-</span>
                          </div>

                          <div className="TwoBtn-CircleAdd">
                            <div className="appetCircle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="appetAddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="SweetCon-Text">
                        <h4>SWEET CONCLUSIONS</h4>
                      </div>

                      <div className="SweetCon-conteriner">
                        <div className="SweetCon-header-Rs">
                          <h4>Mango Sticky Rice Spring Rolls</h4>
                          {/* for Mob View */}
                          <h5>
                            Mango Sticky Rice <br />
                            Spring Rolls
                          </h5>
                          <span>149/-</span>
                        </div>

                        <div className="TwoBtn-CircleAdd">
                          <div className="appetCircle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="appetAddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BsArrowDownCircle className="scroll-down-icon" />
              </div>
            </div>
          </div>
          <div className="footer-section-4">
            <Footer />
          </div>
        </Layout>
      </main>
    </>
  );
}
export default ChineseMenu2;
