/** @format */

import React from "react";
import "./App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="row">
          <div className="col-md-12">
            <div className="Footer"></div>
            <div className="address">
              <h1>Address</h1>
              <p>
                Cafe Plot No. 45, Street No.14 Marol MIDC Industry <br />{" "}
                Estate, Andheri East,Mumbai-400093
              </p>
            </div>
            <div className="second-col">
              <h1>Help & Info</h1>
              <NavLink to="/About">About</NavLink>
              <NavLink to="">Careers</NavLink>
              <NavLink to="/Blog">Blogs</NavLink>
              <NavLink to="/FAQs">FAQs</NavLink>
            </div>
            <div className="Third-col">
              <h1>Contact Us</h1>
              <div className="phone-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none">
                  <path
                    d="M24.2866 17.6656L18.8179 15.3218C18.5843 15.2223 18.3246 15.2013 18.078 15.262C17.8315 15.3228 17.6113 15.462 17.4507 15.6587L15.0288 18.6177C11.2279 16.8256 8.16904 13.7668 6.37695 9.96587L9.33594 7.54399C9.53305 7.38368 9.67256 7.16351 9.73335 6.91682C9.79414 6.67013 9.7729 6.41035 9.67285 6.1768L7.3291 0.708053C7.21929 0.4563 7.02508 0.250751 6.77996 0.126852C6.53483 0.00295173 6.25416 -0.0315334 5.98633 0.0293424L0.908203 1.20122C0.649985 1.26085 0.419602 1.40624 0.254656 1.61366C0.0897096 1.82109 -5.94829e-05 2.07829 2.95713e-08 2.34331C2.95713e-08 14.8677 10.1514 24.9996 22.6562 24.9996C22.9213 24.9997 23.1787 24.91 23.3862 24.7451C23.5937 24.5801 23.7392 24.3497 23.7988 24.0914L24.9707 19.0132C25.0312 18.7441 24.996 18.4623 24.8711 18.2163C24.7463 17.9704 24.5396 17.7756 24.2866 17.6656Z"
                    fill="black"
                  />
                </svg>
                <p>1809-908-5647</p>
              </div>
              <div className="message-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="23"
                  viewBox="0 0 25 23"
                  fill="none">
                  <path
                    d="M6.94444 19.4444C5.83333 19.4444 4.72222 18.4722 4.16667 18.0556C1.38889 16.1111 0.555556 15.4167 0 15V20.8333C0 21.6003 0.621962 22.2222 1.38889 22.2222H12.5C13.2669 22.2222 13.8889 21.6003 13.8889 20.8333V15C13.3333 15.4167 12.5 16.1111 9.72222 18.0556C9.16667 18.4722 8.05556 19.4444 6.94444 19.4444ZM12.5 11.1111H1.38889C0.621962 11.1111 0 11.7331 0 12.5V13.1944C1.11111 14.0278 0.972222 14.0278 5 16.9444C5.41667 17.2222 6.25 18.0556 6.94444 18.0556C7.63889 18.0556 8.47222 17.2222 8.88889 17.0833C12.9167 14.1667 12.7778 14.1667 13.8889 13.3333V12.5C13.8889 11.7331 13.2669 11.1111 12.5 11.1111ZM23.6111 6.94444H9.72222C8.95529 6.94444 8.33333 7.56641 8.33333 8.33333V9.72222H12.5C13.9414 9.72222 15.1298 10.8255 15.2652 12.2318L15.2778 12.2222V18.0556H23.6111C24.378 18.0556 25 17.4336 25 16.6667V8.33333C25 7.56641 24.378 6.94444 23.6111 6.94444ZM22.2222 12.5H19.4444V9.72222H22.2222V12.5ZM6.94444 8.33333C6.94444 6.80165 8.19054 5.55556 9.72222 5.55556H19.4444V1.38889C19.4444 0.621962 18.8225 0 18.0556 0H4.16667C3.39974 0 2.77778 0.621962 2.77778 1.38889V9.72222H6.94444V8.33333Z"
                    fill="black"
                  />
                </svg>
                <p>Get in Touch</p>
              </div>
              <div className="chat-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none">
                  <path
                    d="M21.1115 4.54418C17.7726 2.33802 13.3346 1.83585 9.648 2.50121C5.52344 -1.47709 0.901476 0.352773 0 0.878815C0 0.878815 3.17187 3.57413 2.65668 5.9348C-1.09852 9.76293 0.686632 14.0251 2.65668 16.0377C3.17187 18.3983 0 21.0937 0 21.0937C0.892795 21.6214 5.50217 23.4457 9.648 19.4878C13.3264 20.1488 17.7643 19.6509 21.1115 17.4409C26.2878 14.1362 26.3047 7.86579 21.1115 4.54375V4.54418ZM12.7682 17.4196C11.4774 17.4233 10.1916 17.2574 8.94401 16.9261L8.08594 17.7547C7.60931 18.2169 7.07563 18.6164 6.49783 18.9435C5.79681 19.2964 5.03526 19.5134 4.25347 19.5828C4.29688 19.5056 4.33507 19.4283 4.3737 19.3554C5.2322 17.7639 5.46369 16.3361 5.06814 15.072C3.65625 13.9604 2.8112 12.5398 2.8112 10.9865C2.8112 7.42743 7.2704 4.54418 12.7682 4.54418C18.2661 4.54418 22.7253 7.42743 22.7253 10.9865C22.7253 14.5455 18.2661 17.4196 12.7682 17.4196ZM7.99132 12.5186C7.59713 12.5241 7.21681 12.3732 6.9337 12.0989C6.65058 11.8246 6.48776 11.4492 6.4809 11.055C6.45052 9.08498 9.42491 9.04201 9.45486 11.0077V11.0299C9.45669 11.2238 9.42028 11.4162 9.3477 11.596C9.27512 11.7759 9.16779 11.9397 9.03187 12.078C8.89594 12.2164 8.73408 12.3266 8.55553 12.4023C8.37698 12.478 8.18526 12.5179 7.99132 12.5194V12.5186ZM11.1931 11.055C11.1589 9.08498 14.1332 9.03767 14.1675 11.0034V11.0299C14.1845 12.9865 11.2274 13.0077 11.1931 11.055ZM17.4162 12.5186C17.022 12.5241 16.6416 12.3732 16.3585 12.0989C16.0753 11.8246 15.9123 11.4492 15.9054 11.055C15.8754 9.08498 18.8498 9.04201 18.8798 11.0077V11.0299C18.8822 11.224 18.8463 11.4166 18.7739 11.5968C18.7015 11.7769 18.5943 11.941 18.4582 12.0794C18.3221 12.2179 18.16 12.3281 17.9812 12.4036C17.8024 12.4791 17.6104 12.5185 17.4162 12.5194V12.5186Z"
                    fill="black"
                  />
                </svg>
                <p>Chat With Us</p>
              </div>
            </div>
            <div className="Fourth-col">
              <h1>Useful links</h1>
              <p>
                Privacy Policy Terms of Use Payment Issues Net Banking Custom
                Jewellery
              </p>
            </div>
            <div className="bottom-tag">
              <h1>Follow Us on :</h1>
              <div className="media-icons">
                <FacebookIcon />
                <WhatsAppIcon />
                <InstagramIcon />
                <XIcon />
              </div>
            </div>
            <div className="footer-para">
              <h1>@2023 Crystals & Carats. All Rights Reserved.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
