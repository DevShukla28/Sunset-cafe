/** @format */

import { FiPlusCircle } from "react-icons/fi";
import "./cart.css";
import React from "react";
import Slider from "react-slick";
import Footer from "../Footer";
import Layout from "./Layout";

function CartContent() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const orderhistorySettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="main">
        <Layout page="Profile">
          <div className="cartcontainer">
            <div className="cartLeftsection">
              <div className="cartHeader">
                <h4>3 Items selected</h4>
                <h4>Explore Menu</h4>
              </div>

              <div className="cartContent-Wrapper">
                <img src={"./Images/veg burger 3.png"} alt="" />

                <div className="cartcontent-Header">
                  <h4>Bombay Masala Grilled Cheese</h4>
                  <p>
                    A delightful plant-based option with a <br /> savory patty
                    crafted from vegetables <br /> and onions, promising a
                    deliciously <br /> satisfying bite.
                  </p>
                </div>

                <div className="Add2cart">
                  <div className="cart-itemCost">
                    <h4>Rs. 40</h4>
                  </div>

                  <div className="Cart-3Btn">
                    <button>
                      <img src={""} alt="" />
                    </button>

                    <span>1</span>
                    <FiPlusCircle className="Cartplus1" />
                  </div>
                </div>
              </div>

              <div className="cartContent-Wrapper cartcontent-secondColmn ">
                <img src={"./Images/veg burger 4.png"} alt="" />

                <div className="cartcontent-Header">
                  <h4>Chicken Seekh Kebab SANDWICH</h4>
                  <p>
                    A classic favorite featuring tender <br /> slices of turkey
                    nestled between soft <br /> bread, offering a comforting and{" "}
                    <br /> fulfilling meal option.
                  </p>
                </div>

                <div className="Add2cart">
                  <div className="cart-itemCost">
                    <h4>Rs. 70</h4>
                  </div>

                  <div className="Cart-3Btn">
                    <button>
                      <img src={""} alt="" />
                    </button>

                    <span>1</span>
                    <FiPlusCircle className="Cartplus1" />
                  </div>
                </div>
              </div>

              <div className="cartContent-Wrapper">
                <img src={"./Images/veg burger 5.png"} alt="" />

                <div className="cartcontent-Header">
                  <h4>MUMBAI VADAPAV</h4>
                  <p>
                    A timeless choice showcasing succulent <br /> ham slices
                    tucked between fresh <br /> bread, delivering a satisfying
                    and hearty meal experience.
                  </p>
                </div>

                <div className="Add2cart">
                  <div className="cart-itemCost">
                    <h4>Rs. 80</h4>
                  </div>

                  <div className="Cart-3Btn">
                    <button>
                      <img src={""} alt="" />
                    </button>

                    <span>1</span>
                    <FiPlusCircle className="Cartplus1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="cartRightsection">
              <div className="cartRight-Header">
                <h4>Choose a delivery address</h4>
              </div>

              <div className="delivery-addrs-wrapper">
                <div className="delivery-header">
                  <div className="delivery-headerText">
                    <h4>Current Address</h4>
                    <p>Samta Colony, Raipur</p>
                  </div>

                  <button className="chnageBtn">Change</button>
                </div>

                <hr style={{ width: "20vw" }} />

                <div className="deliveryheader-bottom">
                  <h4>
                    Login to use your <br /> saved addresses
                  </h4>
                  <button className="addBtn">My Address</button>
                </div>
              </div>

              <h2 className="ofr-txt">Offers</h2>

              <div className="ofr-wrapper">
                <h4>Select offer / Apply coupon</h4>
                <p>Get discount with your order</p>
                <div className="slider-container">
                  <Slider {...settings}>
                    <div className="ofr-caraosel">
                      <h3>1</h3>
                    </div>

                    <div className="ofr-caraosel">
                      <h3>2</h3>
                    </div>

                    <div className="ofr-caraosel">
                      <h3>3</h3>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div className="meal-wrapper">
            <div className="mealLeft">
              <div className="meal-Header">
                <h4>Complete your meal with </h4>
              </div>

              <div className="meal-caraosel">
                <div className="slider-container">
                  <Slider {...slickSettings}>
                    <div className="ofr-caraosel2">
                      <img src={"./Images/Rectangle 148.png"} alt="" />
                    </div>

                    <div className="ofr-caraosel2">
                      <img src={"./Images/veg burger 3.png"} alt="" />
                    </div>

                    <div className="ofr-caraosel2">
                      <img src={"./Images/slide-1.png"} alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            <div className="priceRight">
              <h4 className="priceText">Price Details</h4>

              <div className="price-wrapper">
                <div className="totalandTaxes">
                  <h4>Sub Total</h4>
                  <span>190</span>
                </div>

                <div className="totalandTaxes">
                  <h4>Discount</h4>
                  <span>-</span>
                </div>

                <div className="totalandTaxes">
                  <h4>Taxes and Charges</h4>
                  <span>32.2</span>
                </div>

                <hr style={{ width: "15rem" }} />

                <div className="totalandTaxes">
                  <h4>Grand Total</h4>
                  <span>222.2</span>
                </div>

                <button className="plcordrBtn">Place Order</button>
              </div>
            </div>
          </div>

          <div className="orderhistory">
            <h4>Recently ordered</h4>
            <div className="slider-container1">
              <Slider {...orderhistorySettings}>
                <div className="ofr-caraosel3">
                  <img src={"./Images/slide-3.png"} alt="" />
                </div>

                <div className="ofr-caraosel3">
                  <img src={"./Images/Rectangle 157.png"} alt="" />
                </div>

                <div className="ofr-caraosel3">
                  <img src={"./Images/Rectangle 159.png"} alt="" />
                </div>

                <div className="ofr-caraosel3">
                  <img src={"./Images/veg burger 3.png"} alt="" />
                </div>

                <div className="ofr-caraosel3">
                  <img src={"./Images/slide-1.png"} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </Layout>
      </div>

      <div className="footer-section-4">
        <Footer />
      </div>
    </>
  );
}
export default CartContent;
