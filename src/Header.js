import * as React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="App-header">
      <img src="./logo3.png" className="App-logo" alt="logo" />
      <a className="header-link" href="/">
        Home
      </a>
      <a className="header-link" href="/about">
        About
      </a>
      <a className="header-link" href="/contactus">
        Contact Us
      </a>
      {/* <a className="header-link right" href="/">
        My Account
      </a> */}
      <button className="sign-in-button right" type="submit">
        Sign In
      </button>
    </div>
  );
}
