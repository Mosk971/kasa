import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="header__nav">
      <ul>
        <NavLink to='/home' activeclassname='active' className="navList">ACCUEIL</NavLink>
        <NavLink to="/About" activeclassname='active' className="navList">A PROPOS</NavLink>        
      </ul>
    </nav>
  );
}

export default Navbar;