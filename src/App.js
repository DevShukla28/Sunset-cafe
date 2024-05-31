/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./Components/Home";
// import Profile from "./Components/Profile";
import Menu from "./Components/Menu";
import Menu2 from "./Components/Menu2";
import Menu3 from "./Components/Menu3";
import Menu4 from "./Components/Menu4";
import StartersMenu5 from "./Components/StartersMenu5";
import Sides from "./Components/Sides";
import Blog from "./Components/Blog";
import Blog1 from "./Components/Blog1";
import Blog2 from "./Components/Blog2";
import Blog3 from "./Components/Blog3";
import Blog4 from "./Components/Blog4";
import Blog5 from "./Components/Blog5";
import Account from "./Components/Account";
import AccountInfo from "./Components/AccountInfo";
import FAQs from "./Components/FAQs";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
import About from "./Components/About";
import Order from "./Components/Order";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/profile" element={<Profile />} /> */}
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Menu2" element={<Menu2 />} />
        <Route exact path="/Menu3" element={<Menu3 />} />
        <Route exact path="/Menu4" element={<Menu4 />} />
        <Route exact path="/Sides" element={<Sides />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/StartersMenu5" element={<StartersMenu5 />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Blog1" element={<Blog1 />} />
        <Route exact path="/Blog2" element={<Blog2 />} />
        <Route exact path="/Blog3" element={<Blog3 />} />
        <Route exact path="/Blog4" element={<Blog4 />} />
        <Route exact path="/Blog5" element={<Blog5 />} />
        <Route exact path="/Account" element={<Account />} />
        <Route exact path="/AccountInfo" element={<AccountInfo />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/Order" element={<Order />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Forgot" element={<Forgot />} />






      </Routes>
    </>
  );
}

export default App;
