import React from "react";
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from 'C:/Users/Talha PC/chatai/src/assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="chatai_navbar">
            <div className="chatai_navbar-links">
                <div className="chatai_navbar-link-logo">
                    <img src={logo} alt="Chat AI" />
                </div>
            </div>
        </div>
    );      
};

export default Navbar;