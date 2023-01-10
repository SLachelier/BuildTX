import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/profile"> CSJ </a>
        <a href="/home"> District </a>
        <a href="/contact"> County </a>
        <a href="/about"> About </a>
      </div>
    </div>
  );
}

export default Navbar;
