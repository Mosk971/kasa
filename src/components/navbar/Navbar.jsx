import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="header__nav">
      <ul>
        <NavLink to='/home' activeClassName='active' className="navList">ACCUEIL</NavLink>
        <NavLink to="/About" activeClassName='active' className="navList">A PROPOS</NavLink>        
      </ul>
    </nav>
  );
}

export default Navbar;