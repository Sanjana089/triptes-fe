import "./Header.css";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="App-header">
      <img src="./logo3.png" className="App-logo" alt="logo" />
      <div className={`header-links ${isMenuOpen ? "open" : ""}`}>
        <div className="dropdown-menu" onClick={toggleMenu}>
          <span className="dropdown-icon">
            {isMenuOpen ? <span>Menu &#8744;</span> : <span>Menu &#62;</span>}
          </span>
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
      <button className="sign-in-button right" type="submit">
        Sign In
      </button>
    </div>
  );
}
