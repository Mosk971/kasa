import React from "react";
import './Footer.css';
import logoFooter from '../../assets/logoFooter.png';

function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerBody">
                <img src={logoFooter} alt="logo kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}


export default Footer;