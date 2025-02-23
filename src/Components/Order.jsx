/** @format */

import React from "react";
import "./order.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";


function Order() {
  return (
    <>
      <div className="order">
        <div className="orderHstry-width">
          <div className="orderhistry-container">
            <div className="orderleft-column">
              <div className="orderHeader-div">
                <h4>
                  <Link to="/account">My Account</Link>
                </h4>
                <h4>
                  <Link to="/accountInfo">Account Information</Link>
                </h4>
                <h3>
                  <Link to="/Order">Your Order</Link>
                </h3>
              </div>
            </div>

            <div className="right-column">
              <div className="orderhistoryHeader">
                <h3>Your order</h3>
                <hr />

                <div className="wings-content">
                  <img src={"./Images/Rectangle 503.png"} alt="" />
                  <p>seems like you have yet to place an order</p>
                </div>

                <div className="orderscroll">
                  <h4>Order History</h4>
                  <hr />

                  <div className="histry-content">
                    <div className="histry1">
                      <img src={"./Images/veg burger 3.png"} alt="" />
                      <div className="histry1-txt">
                        <h5>Bombay Masala Sandwich</h5>
                        <p>Data: 02-01-24 12:14pm</p>
                        <p>Payment: UPI</p>
                      </div>
                    </div>

                    <div className="histry1">
                      <img src={"./Images/slide-1.png"} alt="" />
                      <div className="histry1-txt">
                        <h5>Burger</h5>
                        <p>Data: 02-01-24 12:14pm</p>
                        <p>Payment: UPI</p>
                      </div>
                    </div>

                    <div className="histry1">
                      <img src={"./Images/sides.png"} alt="" />
                      <div className="histry1-txt">
                        <h5>Corn Sandwich</h5>
                        <p>Data:20-12-23 1:04pm</p>
                        <p>Payment: UPI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="letus-header">
            <h1>Let us reach you</h1>

            <div className="letsbtn">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your E-Mail ID"
              />
              <button> SUBMIT </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-4">
        <Footer />
      </div>
    </>
  );
}
export default Order;
