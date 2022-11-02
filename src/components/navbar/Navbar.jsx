import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="header__nav">
      <ul>
        <NavLink to='/home' activeclassname='actif' className="navList A">ACCUEIL</NavLink>
        <NavLink to="/About" activeclassname='actif' className="navList B">A PROPOS</NavLink>        
      </ul>
    </nav>
  );
}

export default Navbar;