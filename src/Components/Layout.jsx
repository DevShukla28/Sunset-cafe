// Layout.js
import React from 'react';
import Navbar from "../Navbar";
const Layout = ({ children, page }) => {
  return (
    <>
      <Navbar page={page} />

      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
