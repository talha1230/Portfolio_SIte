import React from "react";
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from 'C:/Users/Talha PC/chatai/src/assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="chatai_navbar">
            <div className="chatai_navbar-links">
                <div className="chatai_navbar-link-logo">
                    <a href="#home">
                        <img src={logo} alt="Chat AI" />
                    </a>
                </div>
                <div className="chatai_navbar-link-container">
                    <p> <a href="#home">Home</a></p>
                    <p> <a href="#features">Features</a></p>
                    <p> <a href="#possibility">Chat AI</a></p>
                    <p> <a href="#blog">Blog</a></p>
                    <p> <a href="#whatChatai">What is Chatai</a></p>
                </div>
                <div className="chatai_navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
                    </div>
            </div>
        </div>
    );      
};

export default Navbar;
