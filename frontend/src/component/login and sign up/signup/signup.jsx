import "./signup.css";
import Input from "../../../tools/input";
import Btt from "../../../tools/button";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmePassword, setconfirmePassword] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid =
    username &&
    email &&
    password &&
    confirmePassword &&
    password === confirmePassword;

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmePassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await fetch("https://your-backend.com/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        Navigate("/authentification");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="containern">
      <div className="left-section">
        <div>
          <h2>Join Devtalk</h2>
          <p>Create an account and start chatting with developers.</p>
        </div>
      </div>

      <div className="right-section">
        <h2>Sign Up</h2>

        <form onSubmit={handleSignup}>
          <Input
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirm your password"
            type="password"
            placeholder="Confirm your password"
            value={confirmePassword}
            onChange={(e) => setconfirmePassword(e.target.value)}
          />

          <Btt name="Create Account" goal="submit" disabled={!isFormValid} />
        </form>

        <p className="sign">
          Already have an account? <Link to="/login"> Sign In </Link>
        </p>
      </div>
    </div>
  );
}
