import React from "react";
import Layout from "./Layout";
import Card2 from "./Card2";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Card3 from "./Card3";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <section className="section">
        <Layout page="Menu">
          <div className="container ">
            <div className="row mt-5">
              <div className="line"></div>
              <h1 className="headingg">SUNSET</h1>
              <div className="line-1"></div>
              <h1 className="sub-heading">CAFE</h1>
            </div>
            <div className="row ms-5 mt-5">
              <div className="col-md-4">
                <img
                  src={"./Images/coffee.png"}
                  alt=""
                  className="coffee-img"
                />
                <button className="coffee-btn mt-3 ms-3">HOT BEVERAGES</button>
              </div>
              <div className="col-md-4">
                <img src={"./Images/shake.png"} alt="" className="shake-img" />
                <button className="coffee-btn mt-3 ms-3">COLD BEVERAGES</button>
              </div>
              <div className="col-md-4">
                <img src={"./Images/cup-tea.png"} alt="" className="tea-img" />
                <button className="coffee-btn mt-3 ms-3">
                  SPECIALITY DRINKS
                </button>
              </div>
            </div>

            {/* second-part  */}

            <div className="row mt-5">
              <div className="col-md-4  ">
                <div className="box-1 d-flex mt-5">
                  <h1 className="name">Espresso</h1>
                  <h5 className="desc">A single shot of concentrated coffee</h5>
                  <h4 className="price-1">RS.120</h4>
                  <div className="plus-btn mt-3 ">+</div>
                </div>
              </div>
              <div className="line-2"></div>

              <div className="w-100"></div>
              <div className="col-md-4 ">
                <div className="box-2 d-flex  mt-5">
                  <h1 className="name-2 ">Cappuccino</h1>
                  <h5 className="desc-1">
                    Equal parts espresso steamed milk, and foam
                  </h5>
                  <h5 className="price-1">Rs.140</h5>
                  <div className="plus-btn mt-3 ">+</div>
                </div>
              </div>
              <div className="line-3"></div>

              <div className="w-100"></div>
              <div className="col-md-4 ">
                <div className="box-3 d-flex  mt-5">
                  <h1 className="name-3 ">Americano</h1>
                  <h5 className="desc-3">Espresso shot with hot water</h5>
                  <h5 className="price-1">Rs.140</h5>
                  <div className="plus-btn mt-3 ">+</div>
                </div>
              </div>
            </div>
            <div className="vr-line"></div>
            {/* 2 col */}
            <div className="row">
              <div className="col-md-4 ">
                <div className="box-4 d-flex mt-5 ms-5">
                  <h1 className="name-4">Iced Coffee</h1>
                  <h5 className="desc-4"></h5>
                  <h5 className="price-4">Rs.140</h5>
                  <div className="plus-btn-4 mt-3">+</div>
                </div>
              </div>
              <div className="line-4"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-5 d-flex  mt-5 ">
                  <h1 className="name-5">Iced Latte</h1>
                  <h5 className="price-5">Rs.130</h5>
                  <div className="plus-btn-5 mt-3">+</div>
                </div>
              </div>
              <div className="line-5"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-6 d-flex  mt-5 ">
                  <h1 className="name-6">Frappuccino</h1>
                  <h5 className="price-6">Rs.120</h5>
                  <div className="plus-btn-6 mt-3">+</div>
                </div>
              </div>
              <div className="line-6"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-7 d-flex  mt-5 ">
                  <h1 className="name-7">Affegeto</h1>
                  <h5 className="price-7">Rs.110</h5>
                  <div className="plus-btn-7 mt-3">+</div>
                </div>
              </div>
              <div className="line-7"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-8 d-flex  mt-5 ">
                  <h1 className="name-8">Ice Latte</h1>
                  <h5 className="price-8">Rs.160</h5>
                  <div className="plus-btn-8 mt-3">+</div>
                </div>
              </div>
            </div>
            <div className="vr-line-2"></div>

            {/* 3 col */}
            <div className="row">
              <div className="col-md-4 ">
                <div className="box-9 d-flex mt-5 ms-5">
                  <h1 className="name-9">Matcha Latte</h1>
                  <h5 className="desc-9"></h5>
                  <h5 className="price-9">Rs.148</h5>
                  <div className="plus-btn-9 mt-3">+</div>
                </div>
              </div>
              <div className="line-8"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-10 d-flex  mt-5 ">
                  <h1 className="name-10">Turmeric Latte</h1>
                  <h5 className="price-10">Rs.160</h5>
                  <div className="plus-btn-10 mt-3">+</div>
                </div>
              </div>
              <div className="line-9"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-11 d-flex  mt-5 ">
                  <h1 className="name-11">Caramel Tea</h1>
                  <h5 className="price-11">Rs.120</h5>
                  <div className="plus-btn-11 mt-3">+</div>
                </div>
              </div>
              <div className="line-10"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-12 d-flex  mt-5 ">
                  <h1 className="name-12">Green Tea</h1>
                  <h5 className="price-12">Rs.120</h5>
                  <div className="plus-btn-12 mt-3">+</div>
                </div>
              </div>
              <div className="line-11"></div>
              <div className="w-100"></div>

              <div className="col-md-4 ">
                <div className="box-13 d-flex  mt-5 ">
                  <h1 className="name-13">Herbal Infusions</h1>
                  <h5 className="price-13">Rs.120</h5>
                  <div className="plus-btn-13 mt-3">+</div>
                </div>
              </div>
            </div>
            <div className="row menu-4">
              <button>OTHER CATEGORIES</button>
              <div className="lines"></div>
              <div className="lines1"></div>
            </div>
            <div className="row slider-2">
              <div className="col-md-12">
                <Card2 />
              </div>
              <NavLink to="/Menu2">
                <div className="button-ex">Explore</div>
              </NavLink>
            </div>
          </div>
          <div className="row menu-5">
            <p>
              BEST OFFERS{" "}
              <CardGiftcardIcon className="gift" style={{ fontSize: 50 }} />
            </p>
            <div className="liness"></div>
            <div className="liness1"></div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Card3 />
              </div>
            </div>
          </div>
          <Footer />
        </Layout>
      </section>
    </>
  );
};

export default Menu;
