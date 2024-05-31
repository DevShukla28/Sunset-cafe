import React from 'react'
import "./forgot.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Layout from "./Layout";

function Forgot() {
  return (
    <>
      <main>
        <Layout page="Menu">
        <div className="fotgot-wrapper">
          <div className="forgot-flex">
            <div className="forget-left-column">
              <div className="frgt-img">
                <img src={"./Images/Rectangle 526.png"} alt="" />
              </div>
            </div>

            <div className="forget-rightcolumn">
              <div className="forget-inputs">
                <h3>Forgot Password?</h3>

                <div className="forget-form">
                  <p>
                    Enter the Email address associated with your account <br />{" "}
                    to get a code.
                  </p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <button>Send Code</button>

                  <h4>
                    <Link to="/Login">Back to login</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section-3">
          <Footer />
        </div>
        </Layout>
      </main>
    </>
  );
}
export default Forgot;
