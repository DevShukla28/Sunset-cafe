/** @format */

import React from "react";
import "./registration.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Layout from "./Layout";

function Registration() {
  return (
    <>
      <main>
        <Layout page="Menu">
          <div className="register-wrapper">
            <div className="rgstrHeader">
              <h2>Register</h2>

              <div className="registration-input-wrap">
                <div className="rgstr-p">
                  <p>Signup now and get full access to our app.</p>
                </div>

                <div className="inputs-nameLastname">
                  <input type="text" name="username" placeholder="First Name" />
                  <input type="text" name="lastname" placeholder="Last Name" />
                </div>

                <div className="emailpasInput">
                  <input type="email" name="Emailid" placeholder="Email" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Confirm Password"
                  />

                  <button className="rgstr-btn">Submit</button>

                  <div className="logn-btn">
                    <p>Already have an Acount ?</p>
                    <button>
                      <Link to="/Login">Login</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <div className="footer-section-3">
          <Footer />
        </div>
      </main>
    </>
  );
}
export default Registration;
