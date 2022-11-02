import React from "react";
import "./Navigation.css";
import { useState } from "react";
import { HomePage } from "../home-page/HomePage";

function Navigation() {
  const [current, setCurrent] = useState(false);
  const toggleCurrentClass = () => {
    setCurrent(!current);
  };
  return (
    <nav className="navbar">
      <a className="link-home" href="#home-page" onClick={toggleCurrentClass}>
        <img src="../../../public/assets/bookmark-white.png" alt="home icon" />
      </a>
      <a
        className="link-bookmark"
        href="#bookmark-page"
        onClick={toggleCurrentClass}
      >
        <img
          src="../../../public/assets/bookmark-icon.png"
          alt="bookmark icon"
        />
      </a>
      <a className="link-form" href="#create-page">
        <img src="../../../public/assets/form-icon.png" alt="form icon" />
      </a>
      <a className="link-profile" href="#profile-page">
        <img src="../../../public/assets/profile-icon.png" alt="profile icon" />
      </a>
    </nav>
  );
}

export default Navigation;
