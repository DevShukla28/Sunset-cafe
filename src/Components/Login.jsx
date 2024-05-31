/** @format */

import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Layout from "./Layout";

function Login() {
  return (
    <>
      <main>
        <Layout page="Menu">
          <div className="login-wrapper">
            <div className="loginHeader">
              <h2>Log In</h2>

              <div className="login-input-wrap">
                <div className="login-p login-left">
                  <p>Log in to your Account.</p>

                  <div className="login-input">
                    <input
                      type="text"
                      name="username"
                      placeholder="Username.."
                    />
                    <input type="text" name="lastname" placeholder="Password" />
                  </div>

                  <div className="forgot-p">
                    <p>
                      <Link to="/Forgot">Forgot Password ?</Link>
                    </p>

                    <button>Submit</button>
                  </div>
                </div>

                <div className="loginImg login-right">
                  <img src={"./Images/Rectangle 527.png"} alt="" />
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
export default Login;
