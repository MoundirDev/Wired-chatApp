import react from "react";
import "./main.css";
import phoneImage from "../../../assets/Design 1.png";
import Vector from "../../../assets/Vector.png";
import Auth from "../../login and sign up/auth/authentification";
export default function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="textss">
          <h1>Stay connected with Devtalk</h1>
          <img
            src={Vector}
            alt="nothing"
            style={{
              width: "320px",
              height: "30px",
              display: "flex",
              marginLeft: "170px",
              marginTop: "-20px",
            }}
          />
          <br />
          <p>
            join the conversation anytime anywhere with Devtalks which mix
            development and chatting in one app.
          </p>
        </div>

        <div className="phoneImage">
          <img src={phoneImage} alt="phone image" />
        </div>
      </section>
    </main>
  );
}
