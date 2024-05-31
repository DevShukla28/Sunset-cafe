/** @format */

import React from "react";
import "./contact.css";
import Footer from "../Footer";
import Layout from "./Layout";

// import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="contact">
        <Layout page="Profile">
          <div className="contact-wrapper">
            <div className="contact-container">
              <div className="contactPara">
                <h1>
                  {" "}
                  “Your thoughts matter to us, so <br /> drop us a line and
                  let's start a <br />
                  conversation today."
                </h1>
              </div>

              <div className="locationEmail-flex">
                <div className="lctnEmail-wrapper">
                  <img src={"./Images/Rectangle 343.png"} alt="" />
                  <h4>Address</h4>
                  <p>
                    MFC Center, Railway Station, Amazing Hotel, near Raipur,
                    Raipur, Chhattisgarh 492001s
                  </p>
                </div>

                <div className="lctnEmail-wrapper">
                  <img src={"./Images/Rectangle 344.png"} alt="" />
                  <h4>Email</h4>
                  <p>sunset@gmail.com</p>
                </div>

                <div className="lctnEmail-wrapper">
                  <img src={"./Images/Rectangle 345.png"} alt="" />
                  <h4>Conatct no.</h4>
                  <p>+91-6254777844</p>
                </div>
              </div>

              <hr />

              <div className="contact-form-wrapper">
                <div className="contactHeader">
                  <h2>Contact Us</h2>
                  <div className="formContent">
                    <div>
                      <h4>First Name</h4>
                      <input type="text" name="name" />
                    </div>

                    <div>
                      <h4>Last Name</h4>
                      <input type="text" name="lastname" id="" />
                    </div>
                  </div>

                  <div className="formContent">
                    <div>
                      <h4>Contact Number</h4>
                      <input type="text" name="name" />
                    </div>

                    <div>
                      <h4>Email ID</h4>
                      <input type="text" name="lastname" id="" />
                    </div>
                  </div>

                  <div className="mesg-div">
                    <input type="text" placeholder="your message for us....." />
                  </div>

                  <button className="cntctSbmt-Btnnn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <div className="footer-section-4">
        <Footer />
      </div>
      </div>

     
    </>
  );
}
export default Contact;
