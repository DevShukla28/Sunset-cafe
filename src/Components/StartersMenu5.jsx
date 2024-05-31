/** @format */

import React from "react";
import Slider from "react-slick";
// import { RxSlash } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./starter.css";
import Card4 from "./Card4";
import Layout from "./Layout";
import Footer from "../Footer";


function StartMenu5() {
  return (
    <>
      <main>
        <Layout page="Menu">
          <div className="menu3-wrapper">
            <div className="menu3-bgImg">
              <img src={"./Images/starter (2).png"} alt="" />
            </div>

            <div className="menu3-wrapper">
              <div className="menu3-container">
                <div className="menu3-itemName-caraosel">
                  <div className="slider-container menu3List-text">
                    <Card4 />
                  </div>
                </div>

                <div className="Starter-wrapper">
                  <div className="Starter-Left">
                    <div className="Starter-Text">
                      <h4>STARTERS</h4>
                      {/* <div className="square1-grn">
                      <span class="dot-grn"></span>
                    </div>

                    <RxSlash className="slash" />

                    <div className="square1-red">
                      <span class="dot-red"></span>
                    </div> */}
                    </div>

                    <div className="StarterLists-wrapper">
                      <div className="Starter-Category">
                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>Crispy Vegetable Spring Rolls</h4>
                            {/* for mob view */}
                            <h5>
                              Crispy Vegetable <br />
                              Spring Rolls
                            </h5>
                            <span>159/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-vejBtn-grn">
                              <span class="Starter-vejDot-grn"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>Paneer Tikka Skewers</h4>
                            {/* for mob view */}
                            <h5>Paneer Tikka Skewers</h5>
                            <span>149/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-vejBtn-grn">
                              <span class="Starter-vejDot-grn"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>
                              Stuffed Mushrooms with <br />
                              Spinach and Feta
                            </h4>
                            {/* for mob view */}
                            <h5>
                              Stuffed Mushrooms <br /> with Spinach and Feta
                            </h5>
                            <span>139/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-vejBtn-grn">
                              <span class="Starter-vejDot-grn"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>Corn and Cheese Balls</h4>
                            {/* for mob view */}
                            <h5>Corn and Cheese Balls</h5>
                            <span>139/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-vejBtn-grn">
                              <span class="Starter-vejDot-grn"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>
                              Chicken Satay with Peanut <br /> Sauce
                            </h4>
                            {/* for mob view */}
                            <h5>
                              Chicken Satay with <br />
                              Peanut Sauce
                            </h5>
                            <span>139/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-nonvejBtn-red">
                              <span class="Starter-nonvejDot-red"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>Prawn Tempura</h4>
                            {/* for mob view */}
                            <h5>Prawn Tempura</h5>
                            <span>139/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-nonvejBtn-red">
                              <span class="Starter-nonvejDot-red"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>Spicy Chicken Wings</h4>
                            {/* for mob view */}
                            <h5>Spicy Chicken Wings</h5>
                            <span>139/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-nonvejBtn-red">
                              <span class="Starter-nonvejDot-red"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Starter-conteriner">
                          <div className="Starter-header-Rs">
                            <h4>Fish Tikka Tacos</h4>
                            {/* for mob view */}
                            <h5>Fish Tikka Tacos</h5>
                            <span>139/-</span>
                          </div>

                          <div className="Starter-threeBtn-vegAdd">
                            <div className="Starter-nonvejBtn-red">
                              <span class="Starter-nonvejDot-red"></span>
                            </div>

                            <div className="Starter-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Starter-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr
                    style={{
                      // height: "90vh",
                      border: "1px solid #F6FA11",
                      marginTop: "7rem",
                      marginBottom: "5rem",
                    }}
                  />

                  <div className="Mouthwatering-right">
                    <div className="Mouthwatering-Text">
                      <h4>MOUTHWATERING COMBOS</h4>
                    </div>

                    <div className="MouthwateringLists-wrapper">
                      <div className="Mouthwatering-Category">
                        <div className="Mouthwatering-conteriner">
                          <div className="Mouthwatering-header-Rs">
                            <h4>Vegetarian Platter</h4>
                            {/* for mob view */}
                            <h5>
                              Vegetarian <br />
                              Platter
                            </h5>
                            <span>149/-</span>
                          </div>

                          <div className="Mouthwatering-twoBtn-Add">
                            <div className="Mouthwatering-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Mouthwatering-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
                        </div>

                        <div className="Mouthwatering-conteriner">
                          <div className="Mouthwatering-header-Rs">
                            <h4>Sunset Signature Sampler</h4>
                            {/* for mob view */}
                            <h5>
                              Sunset <br /> Signature <br /> Sampler
                            </h5>
                            <span>139/-</span>
                          </div>

                          <div className="Mouthwatering-twoBtn-Add">
                            <div className="Mouthwatering-circle-plusMinus">
                              <span>-1+</span>
                            </div>

                            <button className="Mouthwatering-AddBtn">
                              Add <FaPlus />{" "}
                            </button>
                          </div>
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
export default StartMenu5;
