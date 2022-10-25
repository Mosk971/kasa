import React from "react";
import "./Header.css";
import Navbar from "../navbar";
import logo from "../../assets/logo.png"; 

function Header() {
  return (
    <header>
        <div className="header__logo">
            <img src={logo} alt="logo kasa" />
        </div>
      <Navbar />
    </header>
  );
}

export default Header;


