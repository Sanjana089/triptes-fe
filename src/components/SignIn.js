import React, { useState } from "react";
import Header from "../Header";
import "./SignIn.css"; // Import the CSS file for styling

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling sign-in form submission
  };

  return (
    <>
      <Header />
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label>     */}
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <p className="signup-text">
          <a href="/signUp" className="signup-text-link">
            New to Triptes? Create Account
          </a>
        </p>
      </div>
    </>
  );
};

export default SignIn;
