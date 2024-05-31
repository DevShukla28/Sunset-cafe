import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./menu2.css";

const Menu2 = () => {
  return (
    <>
      <section className="body-2">
        <Layout page="Menu">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="whatson-Wrapper">
                  <div className="Whatson-Bg-Img mt-3">
                    <img src={"./Images/bg-img.png"} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-12">
                <div className="whatonmindText-wrapper">
                  <div className="whatonmindText-container">
                    <div className="whatsonmind-text">
                      <div className="tabmainmenu-hr"></div>
                      <h4>WHAT’S ON YOUR MIND&nbsp;?</h4>
                      <div className="tabmainmenu-hr-2"></div>
                    </div>

                    <div className="menuList-wrapper row mt-3">
                      {/* Repeat this block for each menu item */}
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/slide-1.png"} alt="" />
                          <h4>
                            <Link to="/menu3 ">BURGER & SANDWICHES</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/chinese.png"} alt="" />
                          <h4>
                            <Link to="/Menu4">Chinese</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/starter.png"} alt="" />
                          <h4>
                            <Link to="/StartersMenu5">Starter</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/sides.png"} alt="" />
                          <h4>
                            <Link to="/Sides">Sides</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/salads.png"} alt="" />
                          <h4>
                            <Link to="/menu1">Salads</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/desert.png"} alt="" />
                          <h4>
                            <Link to="/menu1">Desert/Ice-cream</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/main course.png"} alt="" />
                          <h4>
                            <Link to="/menu1">Main Course</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/value combo.png"} alt="" />
                          <h4>
                            <Link to="/menu1">Value Combo</Link>
                          </h4>
                        </div>
                      </div>
                      <div className="col-md-4 mt-5">
                        <div className="menuList-Img-Text">
                          <img src={"./Images/beverages.png"} alt="" />
                          <h4>
                            <Link to="/menu1 ">Beverages</Link>
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div className="seeMore-icon-div">
                      <KeyboardArrowDownIcon className="down-arrow" />
                      <h4>See More</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="footer-section-2">
          <Footer />
          </div>
        
        </Layout>
      </section>
    </>
  );
};

export default Menu2;
