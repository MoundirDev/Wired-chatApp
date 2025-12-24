import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../assets/ewrtyu.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logoPart">
        <Link to="/">
          <img className="logo" src={logo} alt="Devtalk logo" />
        </Link>
      </div>

      <div className="right">
        <nav className="nav">
          <ul>
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>

        <Link to="/signup">
          <button className="gsbutton">Get Started</button>
        </Link>
      </div>
    </header>
  );
}
