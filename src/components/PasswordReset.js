import React, { useState } from "react";
import Header from "./Header";
import "./PasswordReset.css"; // Import the CSS file for styling

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling forgot password form submission
  };

  return (
    <>
      <Header />
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <input
            placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-password-button">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default PasswordReset;
