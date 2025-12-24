import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../tools/input.jsx";
import "./login.css";
import Btt from "../../../tools/button.jsx";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-backend.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2>Welcome to Devtalk</h2>
        <br />
        <p>Connect, chat, and collaborate with developers.</p>
      </div>

      <div className="right-section">
        <h2>Sign In</h2>

        <form onSubmit={handleLogin}>
          <Input
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="forgotpass">forgot password!</p>
          <Btt name="Login" goal="submit" />
        </form>

        <p className="sign">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
