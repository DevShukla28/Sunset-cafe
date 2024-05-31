/** @format */

import React from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function Navbar({ page }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar- bg-">
        <div className="container-fluid">
          <img
            src={"./Images/cafe logo.png"}
            alt="logo"
            style={{ height: "100px", width: "150px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-list">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  style={{ color: "white" }}
                  to="/"   activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  style={{ color: "white" }}
                  to="/Menu"   activeClassName="active">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  style={{ color: "white" }}
                  to="/Contact"   activeClassName="active">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  style={{ color: "white" }}
                  to="/Blog"   activeClassName="active">
                  Blog
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-list-1">
              {page !== "Profile" && page !== "Menu" && (
                <>
                  <li className="nav-but right-part-1">
                    <NavLink
                      className="nav-link mt-3"
                      style={{ color: "white" }}
                      to="/Registration">
                      SignUp &nbsp; &nbsp;
                      <span className="vertical"></span>
                    </NavLink>
                  </li>
                  <li className="nav-but right-part-1">
                    <NavLink
                      className="nav-link mt-3"
                      style={{ color: "white" }}
                      to="/Login">
                      Login
                      <NavLink to="/Cart">
                        <ShoppingCartIcon
                          className="Icon"
                          fontSize="large"
                        />
                        <h6 className="my-cart">my cart</h6>
                      </NavLink>
                    </NavLink>
                  </li>
                </>
              )}
              {page === "Profile" && (
                <>
                  <AccountCircleIcon className="profile-icon" />
                  <ShoppingCartIcon className="Icon-main" fontSize="Large" />
                  <h6 className="cart-icon">my cart</h6>
                </>
              )}
            </ul>
          </div>
        </div>

        {page === "Menu" && (
          <>
            <input
              type="text"
              placeholder=" Search Item "
              className="menu-btn"
            />
            <SearchIcon className="search-icon" />
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
