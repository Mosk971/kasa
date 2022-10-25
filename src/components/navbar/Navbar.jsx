import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="header__nav">
      <ul>
        <li className="navList">ACCUEIL</li>
        <li className="navList">A PROPOS</li>        
      </ul>
    </nav>
  );
}

export default Navbar;