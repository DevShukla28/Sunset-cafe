/** @format */

import React from "react";
import Layout from "./Layout";
// import { Link } from "react-router-dom";
// import Footer from "../Footer";
import Card4 from "./Card4";
import { RxSlash } from "react-icons/rx";
import AddIcon from "@mui/icons-material/Add";
import { BsArrowDownCircle } from "react-icons/bs";
import Footer from "../Footer";
import "./menu3.css";

const Menu3 = () => {
  return (
    <>
      <section className="body-3">
        <Layout page="Menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="first-Img ">
                  <img src={"./Images/sandwich.png"} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row ">
              <div className="col-md-12">
                <div className="slider-section">
                  <Card4 />
                </div>
              </div>
            </div>
          </div>
          <div className="burgerSandwich-wrapper">
            <div className="burgerSection-Left">
              <div className="burger-Text">
                <h4>BURGERS</h4>
                <div className="square1-grn">
                  <span class="dot-grn"></span>
                </div>

                <RxSlash className="slash" />

                <div className="square1-red">
                  <span class="dot-red"></span>
                </div>
              </div>

              <div className="burgerLists-wrapper">
                <div className="burger-Category">
                  <div className="burger-conteriner">
                    <div className="burger-header-Rs">
                      <h4>Tandoori Chicken Tikka Burger</h4>
                      {/* for mov view */}
                      <h5>
                        Tandoori Chicken <br /> Tikka Burger
                      </h5>
                      <span>210/-</span>
                    </div>

                    <div className="threeBtn-vegAdd">
                      <div className="nonvejBtn-red">
                        <span class="nonvejDot-red"></span>
                      </div>

                      <div className="circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="burger-conteriner">
                    <div className="burger-header-Rs">
                      <h4>Paneer Bhurji Burger</h4>
                      {/* for mov view */}
                      <h5>Paneer Bhurji Burger</h5>
                      <span>169/-</span>
                    </div>

                    <div className="threeBtn-vegAdd">
                      <div className="vejBtn-grn">
                        <span class="vejDot-grn"></span>
                      </div>

                      <div className="circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="burger-conteriner">
                    <div className="burger-header-Rs">
                      <h4>Aloo Tikki Burger</h4>
                      {/* for mov view */}
                      <h5>Aloo Tikki Burger</h5>

                      <span>149/-</span>
                    </div>

                    <div className="threeBtn-vegAdd">
                      <div className="vejBtn-grn">
                        <span class="vejDot-grn"></span>
                      </div>

                      <div className="circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="burger-conteriner">
                    <div className="burger-header-Rs">
                      <h4>Egg Bhurji Breakfast Burger</h4>
                      {/* for mov view */}
                      <h5>
                        Egg Bhurji Breakfast <br /> Burger
                      </h5>
                      <span>129/-</span>
                    </div>

                    <div className="threeBtn-vegAdd">
                      <div className="nonvejBtn-red">
                        <span class="nonvejDot-red"></span>
                      </div>

                      <div className="circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="burger-conteriner">
                    <div className="burger-header-Rs">
                      <h4>Keema Pav Burger</h4>
                      {/* for mov view */}
                      <h5>Keema Pav Burger</h5>
                      <span>229/-</span>
                    </div>

                    <div className="threeBtn-vegAdd">
                      <div className="nonvejBtn-red">
                        <span class="nonvejDot-red"></span>
                      </div>

                      <div className="circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="burger-conteriner">
                    <div className="burger-header-Rs">
                      <h4>Palak Paneer Burger</h4>
                      {/* for mov view */}
                      <h5>Palak Paneer Burger</h5>

                      <span>159/-</span>
                    </div>

                    <div className="threeBtn-vegAdd">
                      <div className="vejBtn-grn">
                        <span class="vejDot-grn"></span>
                      </div>

                      <div className="circle-plusMinus">
                        <span>-1+</span>
                      </div>
                      <button className="AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr
              style={{
                //  height:"70vh",
                border: "1px solid #F6FA11",
                marginTop: "7rem",
                marginBottom: "5rem",
              }}
            />

            <div className="sandwichSection-right">
              <div className="sandwich-Text">
                <h4>SANDWICHES</h4>
                <div className="Sandwich-square1-grn">
                  <span class="sandwich-dot-grn"></span>
                </div>

                <RxSlash className="Sand-slash" />

                <div className="Sand-square1-red">
                  <span class="Sand-dot-red"></span>
                </div>
              </div>

              <div className="SandwichLists-wrapper">
                <div className="Sandwich-Category">
                  <div className="Sandwich-conteriner">
                    <div className="Sandwich-header-Rs">
                      <h4>Bombay Masala Grilled Cheese</h4>
                      {/* for mov view */}
                      <h5>
                        Bombay Masala <br /> Grilled Cheese
                      </h5>
                      <span>159/-</span>
                    </div>

                    <div className="sandwich-threeBtn-vegAdd">
                      <div className="Sand-nonvejBtn-grn">
                        <span class="Sand-nonvejDot-grn"></span>
                      </div>

                      <div className="Sand-circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="Sand-AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="Sandwich-conteriner">
                    <div className="Sandwich-header-Rs">
                      <h4>Chicken Seekh Kebab Sanswich</h4>
                      {/* for mov view */}
                      <h5>
                        Chicken Seekh <br /> Kebab Sanswich
                      </h5>
                      <span>179/-</span>
                    </div>

                    <div className="sandwich-threeBtn-vegAdd">
                      <div className="Sand-nonvejBtn-red">
                        <span class="Sand-nonvejDot-red"></span>
                      </div>

                      <div className="Sand-circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="Sand-AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="Sandwich-conteriner">
                    <div className="Sandwich-header-Rs">
                      <h4>Mumbai Vada Pav</h4>
                      {/* for mov view */}
                      <h5>Mumbai Vada Pav</h5>
                      <span>139/-</span>
                    </div>

                    <div className="sandwich-threeBtn-vegAdd">
                      <div className="Sand-nonvejBtn-grn">
                        <span class="Sand-nonvejDot-grn"></span>
                      </div>

                      <div className="Sand-circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="Sand-AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="Sandwich-conteriner">
                    <div className="Sandwich-header-Rs">
                      <h4>Butter Chicken Naanwich</h4>
                      {/* for mov view */}
                      <h5>
                        Butter Chicken <br />
                        Naanwich
                      </h5>
                      <span>169/-</span>
                    </div>

                    <div className="sandwich-threeBtn-vegAdd">
                      <div className="Sand-nonvejBtn-red">
                        <span class="Sand-nonvejDot-red"></span>
                      </div>

                      <div className="Sand-circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="Sand-AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="Sandwich-conteriner">
                    <div className="Sandwich-header-Rs">
                      <h4>Masala Grilled Fish Sandwich</h4>
                      {/* for mov view */}
                      <h5>
                        Masala Grilled <br />
                        Fish Sandwich
                      </h5>
                      <span>199/-</span>
                    </div>

                    <div className="sandwich-threeBtn-vegAdd">
                      <div className="Sand-nonvejBtn-red">
                        <span class="Sand-nonvejDot-red"></span>
                      </div>

                      <div className="Sand-circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="Sand-AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>

                  <div className="Sandwich-conteriner">
                    <div className="Sandwich-header-Rs">
                      <h4>Veg Seekh Kebab Sub</h4>
                      {/* for mov view */}
                      <h5>
                        Veg Seekh <br />
                        Kebab Sub
                      </h5>
                      <span>159/-</span>
                    </div>

                    <div className="sandwich-threeBtn-vegAdd">
                      <div className="Sand-nonvejBtn-grn">
                        <span class="Sand-nonvejDot-grn"></span>
                      </div>

                      <div className="Sand-circle-plusMinus">
                        <span>-1+</span>
                      </div>

                      <button className="Sand-AddBtn">
                        Add <AddIcon />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BsArrowDownCircle className="scroll-down-icon" />

          {/* <div className="footer-section-2">
            <Footer />
          </div> */}
          <div className="footer-section-3">
            <Footer />
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Menu3;
