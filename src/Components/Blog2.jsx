/** @format */

import React from "react";
import "./blog2.css";
import Layout from "./Layout";
import Footer from "../Footer";

function Blog2() {
  return (
    <>
      <div className="blog-2">
        <Layout page="Menu">
          <div className="blog2Main">
            <div className="blog2-container">
              <h1>
                #2 "Café Sunset Chronicles: <br /> A Journey Through <br />{" "}
                Flavors and Moments"
              </h1>

              <div className="blog2-para">
                <p>
                  Welcome to the vibrant tapestry of Café Sunset, where every
                  cup tells a story, and every moment is a cherished chapter in
                  our culinary odyssey. Join us as we embark on a captivating
                  journey, unveiling the essence of Café Sunset through its
                  diverse flavors and unforgettable moments
                </p>
              </div>

              <hr style={{ borderColor: "#D16E43" }} />

              <div className="morning-prelude-wrapper">
                <div className="morning-prelude-header">
                  <h3>Morning Prelude: Awakening the Senses.</h3>
                  {/* for Mobile view */}

                  <div className="mob-morning-prelude-img">
                    <img src={"./Images/bg-img.png"} alt="" />
                  </div>
                  <p>
                    As dawn breaks, Café Sunset comes alive with the Morning{" "}
                    <br /> Prelude – a symphony of aromas and flavors that greet
                    you <br /> with warmth and vitality. The Sunrise Espresso
                    takes center <br /> stage, a robust elixir that awakens your
                    senses, setting the <br /> stage for a day filled with
                    culinary delights. Paired with a <br /> selection of freshly
                    baked pastries, the morning at Café <br /> Sunset is a sweet
                    beginning to your journey.
                  </p>
                </div>

                <div className="morning-prelude-img">
                  <img src={"./Images/bg-img.jpeg"} alt="" />
                </div>
              </div>

              <hr style={{ borderColor: "#D16E43" }} />

              <div className="salad-prelude-wrapper">
                <div className="salad-prelude-img">
                  <img src={"./Images/salads.png"} alt="" />
                </div>

                <div className="salad-prelude-header">
                  <h3>Culinary Odyssey: Seasons on a Plate</h3>

                  {/* for mob view */}
                  <div className="mob-salad-prelude-img">
                    <img src={"./Images/salads.png"} alt="" />
                  </div>

                  <p>
                    The heart of Café Sunset lies in its culinary offerings, a
                    true <br /> odyssey through the seasons. Our chefs curate a
                    culinary <br /> symphony with seasonal specialties that
                    capture the essence <br /> of each moment. From light and
                    refreshing summer salads to <br /> hearty and comforting
                    winter stews, each dish is a celebration <br /> of local
                    flavors and innovation. Be sure to explore our daily <br />{" "}
                    specials.
                  </p>
                </div>
              </div>

              <hr
                className="blog2-hrsecondlast"
                style={{ borderColor: "#D16E43" }}
              />

              <div className="blog2Last-para">
                <p>
                  The sun may set, but the flavors linger, inviting you to
                  return and continue your exploration of the rich tapestry of
                  Café Sunset – a journey through flavors and moments that
                  linger long after you've left our doors.
                </p>
              </div>
            </div>
          </div>
          <div className="footer-section-4">
            <Footer />
          </div>
        </Layout>
      </div>
    </>
  );
}
export default Blog2;
