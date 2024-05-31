/** @format */

import React from "react";
import "./about.css";
import Footer from "../Footer";
import Layout from "./Layout";

const About = () => {
  return (
    <>
      <div className="About">
        <Layout page="Profile">
          <div className="aboutus-wrapper">
            <div className="aboutus-content">
              {/* <div className="aboutusHeader">
            <h2>ABOUT US</h2>
          </div> */}

              <div className="aboutusStory-Wrapper">
                <div className="aboutusStory-txt aboutusWrapperLeft">
                  <h1>The story behind sunset ...</h1>

                  <div className="aboutusParagraph">
                    <p>
                      Welcome to Sunset Café, where our journey began with Chef
                      André's bold decision to depart from the world of haute
                      cuisine and create a culinary sanctuary rooted in
                      simplicity and heartfelt connection. <br /> <br />{" "}
                      Inspired by a chance encounter with a charming café bathed
                      in the warm glow of twilight, Chef André envisioned a
                      place where genuine hospitality and exceptional flavors
                      intertwine. At Sunset Café, each dish is a reflection of
                      Chef André's dedication to crafting culinary experiences
                      that nourish both body and soul.
                    </p>
                  </div>
                </div>

                <div className="about-uschefSectionRight">
                  <div className="aboutus-chefImg">
                    <img src={"./Images/chef.jpeg"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about2-wrapper">
            <div className="about2-container">
              <div className="about2-content">
                <div className="abtPara-img about-Left">
                  <img src={"./Images/home-bg.jpg"} alt="" />
                </div>

                <div className="about2-paraText about-right">
                  <p>
                    At Sunset Café, our mission is deeply personal. Inspired by
                    Chef André's journey and fueled by his passion for heartfelt
                    connection, we've crafted a culinary sanctuary where every
                    bite tells a story and every moment is cherished. With a
                    commitment to authenticity, warmth, and sustainability, we
                    invite you to join us in creating memories over delicious
                    dishes that nourish both body and soul. Here, amidst the
                    comforting glow of twilight, we celebrate community and the
                    simple joys of shared meals. Welcome to our table; we can't
                    wait to share our story with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about3-wrapper">
            <div className="about3-container">
              <div className="about3-content">
                <div className="about3-paraText about3-right">
                  <h2>Sharing Meals, Sharing Hope</h2>
                  <p>
                    At Sunset Café, we believe in giving back to our community.
                    That's why we're proud to share that 1% of our profits go
                    towards providing food for orphanages. Because at Sunset,
                    you never eat alone; every meal you enjoy is shared with
                    hundreds of orphaned children, spreading warmth and
                    nourishment to those who need it most. Join us in making a
                    difference, one meal at a time. heading for this
                  </p>
                </div>

                <div className="abt3Para-img about3-Left">
                  <img src={"./Images/form-img.jpeg"} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="aboutlastcomp-wrapper">
            <div className="aboutlast-content">
              <div className="aboutlast-img">
                <img src={"./Images/Rohit.png"} alt="" />
              </div>

              <div className="last-p">
                <p>
                  "Rohit, the friendly waiter at Sunset Café, <br />{" "}
                  effortlessly connects with regulars, <br /> showcasing
                  exceptional communication <br />
                  skill and spreading warmth <br />
                  to all."
                </p>
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
};

export default About;
