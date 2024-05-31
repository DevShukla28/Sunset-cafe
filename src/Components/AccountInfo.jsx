/** @format */

import React from "react";
import "./account2.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

function AccountInfo() {
  return (
    <>
      <div className="accinfo">
        <div className="acInfo-container">
          <div className="acinfo-wrapper">
            <div className="acInfo-Left">
              <div className="acinfo-header ">
                <h4>
                  <Link to="/account">My Account</Link>
                </h4>
                <h3>
                  <Link to="/acountInfo vl">Account Information</Link>
                </h3>
                <h4>
                  <Link to="/order">Your Order</Link>
                </h4>
              </div>
            </div>

            <div className="acInfo-right">
              <div className="editInfo-header">
                <h2>EDIT ACCOUNT INFORMATION</h2>
                <h3>ACCOUNT INFORMATION</h3>
                <hr />

                <div className="inputsection">
                  <label htmlFor="text"> First Name *</label>
                  <br />
                  <input type="text" placeholder="ABC" required /> <br />
                  <label htmlFor="text">Last Name *</label> <br />
                  <input type="text" placeholder="XYZ" required /> <br />
                  <label htmlFor="number">Phone Number *</label> <br />
                  <input
                    type="number"
                    name="PhoneNumber"
                    placeholder="123"
                    required
                  />
                </div>

                <div className="addSection">
                  <h3>ADDRESS</h3>

                  <hr />
                  <h4>Street Address *</h4>
                  <input type="text" />

                  <h4>City *</h4>
                  <input type="text" />

                  <h4>State *</h4>
                  <input type="text" />

                  <h4>Zip Code *</h4>
                  <input type="text" />
                </div>
              </div>
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
export default AccountInfo;
