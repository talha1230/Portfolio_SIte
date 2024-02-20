import React, { useState } from "react";
import logo from 'C:/Users/Talha PC/chatai/src/assets/logo.svg';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chatai_navbar">
            <div className="chatai_navbar-links">
                <div className="chatai_navbar-link-logo">
                    <a href="#home">
                        <img src={logo} alt="Chat AI" />
                    </a>
                </div>
                <div className={`chatai_navbar-link-container ${isOpen ? 'open' : ''}`}>
                    <p> <a href="#home">Home</a></p>
                    <p> <a href="#features">Features</a></p>
                    <p> <a href="#possibility">Chat AI</a></p>
                    <p> <a href="#blog">Blog</a></p>
                    <p> <a href="#whatChatai">Mission</a></p>
                    <div className="chatai_navbar-sign">
                        <p>Sign in</p>
                        <button type="button">Sign Up</button>
                    </div>
                </div>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </div>
            </div>
        </div>
    );      
};

export default Navbar;