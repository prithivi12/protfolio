import React, { useState } from "react";
import "./NavBarStyle.css";
import Logo from "../../assets/portfolioLogo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/"> home</Link>
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <Link to="/project">Project</Link>
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          <Link to="skills">Skills</Link>
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
