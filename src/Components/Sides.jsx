/** @format */

import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./sides.css";
import Card4 from "./Card4";
import Layout from "./Layout";
import Footer from "../Footer";

function Sides() {
  return (
    <>
      <main>
        <Layout page="Menu">
          <div className="menu4-wrapper">
            <div className="menu4-bgImg">
              <img src={"./Images/images 2.png"} alt="" />
            </div>

            <div className="menu4-wrapper">
              <div className="menu4-container">
                <Card4 />
              </div>

              <div className="Sides-wrapper">
                <div className="Sides-Left">
                  <div className="Sides-Text">
                    <h4> SIDES SELECTIONS</h4>
                    {/* <div className="square1-grn">
                      <span class="dot-grn"></span>
                    </div>

                    <RxSlash className="slash" />

                    <div className="square1-red">
                      <span class="dot-red"></span>
                    </div> */}
                  </div>

                  <div className="SidesLists-wrapper">
                    <div className="Sides-Category">
                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4>Garlic Parmesan Fries</h4>
                          {/* mob view */}
                          <h5>Garlic Parmesan Fries</h5>
                          <span>159/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-vejBtn-grn">
                            <span class="Sides-vejDot-grn"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4>Grilled Seasonal Vegetables</h4>
                          {/* mob view */}
                          <h5>
                            Grilled Seasonal <br /> Vegetables
                          </h5>
                          <span>149/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-vejBtn-grn">
                            <span class="Sides-vejDot-grn"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4>Cumin-Spiced Roasted Potatoes</h4>
                          {/* mob view */}
                          <h5>
                            Cumin-Spiced <br /> Roasted Potatoes
                          </h5>
                          <span>139/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-vejBtn-grn">
                            <span class="Sides-vejDot-grn"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4>Sesame Ginger Glazed Green Beans</h4>
                          {/* mob view */}
                          <h5>
                            Sesame Ginger <br />
                            Glazed Green Beans
                          </h5>
                          <span>139/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-vejBtn-grn">
                            <span class="Sides-vejDot-grn"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4>Honey Sriracha Chicken Wings</h4>
                          {/* mob view */}
                          <h5>
                            Honey Sriracha <br /> Chicken Wings
                          </h5>
                          <span>139/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-nonvejBtn-red">
                            <span class="Sides-nonvejDot-red"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4>Crispy Calamari Rings</h4>
                          {/* mob view */}
                          <h5>
                            Crispy Calamari <br /> Rings
                          </h5>
                          <span>139/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-nonvejBtn-red">
                            <span class="Sides-nonvejDot-red"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4> Chili Garlic Grilled Chicken Skewers</h4>
                          {/* mob view */}
                          <h5>
                            Chili Garlic Grilled <br /> Chicken Skewers
                          </h5>
                          <span>139/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-nonvejBtn-red">
                            <span class="Sides-nonvejDot-red"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="Sides-conteriner">
                        <div className="Sides-header-Rs">
                          <h4>Fish Tikka Tacos</h4>
                          {/* mob view */}
                          <h5>Fish Tikka Tacos</h5>
                          <span>139/-</span>
                        </div>

                        <div className="Sides-threeBtn-vegAdd">
                          <div className="Sides-nonvejBtn-red">
                            <span class="Sides-nonvejDot-red"></span>
                          </div>

                          <div className="Sides-circle-plusMinus">
                            <span>-1+</span>
                          </div>

                          <button className="Sides-AddBtn">
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

                <div className="AddOns-right">
                  <div className="AddOns-Text">
                    <h4>INDULGENT ADD-ONS</h4>
                  </div>

                  <div className="AddOnsLists-wrapper">
                    <div className="AddOns-Category">
                      <div className="AddOns-conteriner">
                        <div className="AddOns-header-Rs">
                          <h4>Truffle Parmesan Fries</h4>
                          {/* mob view */}
                          <h5>
                            Truffle <br />
                            Parmesan <br /> Fries
                          </h5>
                          <span>149/-</span>
                        </div>

                        <div className="AddOns-twoBtn-Add">
                          <div className="AddOns-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="AddOns-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>

                      <div className="AddOns-conteriner">
                        <div className="AddOns-header-Rs">
                          <h4>Loaded Potato Skins</h4>
                          {/* mob view */}
                          <h5>
                            Loaded <br /> Potato Skins
                          </h5>
                          <span>139/-</span>
                        </div>

                        <div className="AddOns-twoBtn-Add">
                          <div className="AddOns-circle-plusMinus">
                            <span>-1+</span>
                          </div>
                          <button className="AddOns-AddBtn">
                            Add <FaPlus />{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
export default Sides;
