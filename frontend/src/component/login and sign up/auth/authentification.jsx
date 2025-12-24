import Btt from "../../../tools/button";
import Input from "../../../tools/input";
import logo from "./../../../assets/ewrtyu 1.png";
import React, { useState } from "react";
import "./authentification.css";
export default function Auth({ email }) {
  const [code, setCode] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    const data = await res.json();

    if (data.success) {
      console.log("Verified!");
    } else {
      console.log("Invalid code");
    }
  };
  return (
    <div className="conti">
      <img src={logo} alt="devtalks logo" />
      <div className="cool">
        <h2>Enter the verification code:</h2>
        <p
          style={{
            marginTop: "40px",
            fontSize: "20px",
            color: "#eef2ff",
          }}>
          Please enter the verification code sent to {email}
        </p>
      </div>

      <form onSubmit={handleVerify}>
        <div className="forrm">
          <input
            type="text"
            placeholder="______"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
          />

          <Btt goal="submit" name="Verify" disabled={code.length === 0} />
        </div>
      </form>
      <p>
        Didn't receive the code? <span>Resend</span>
      </p>
    </div>
  );
}
