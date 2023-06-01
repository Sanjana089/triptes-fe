import "./Header.css";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App-header">
      <a href="/" className="App-logo-link">
        <img src="./logo3.png" className="App-logo" alt="logo" />
      </a>
      <div className={`header-links ${isMenuOpen ? "open" : ""}`}>
        <div className="dropdown-menu" onClick={toggleMenu}>
          <span className={`dropdown-icon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`left-column-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="close-button" onClick={toggleMenu}>
            <span>&times;</span>
          </div>
          <div className="dropdown-content">
            <a className="header-link" href="/">
              Home
            </a>
            <a className="header-link" href="/about">
              About
            </a>
            <a className="header-link" href="/contactus">
              Contact Us
            </a>
          </div>
        </div>
        <a href="/" className="App-logo-link-mobile">
          <img src="./logo3.png" className="App-logo" alt="logo" />
        </a>
        <span className="sign-in-button right" type="submit">
          <a href="/signin" className="sign-in-link">Sign In</a>
        </span>
      </div>
    </div>
  );
}
