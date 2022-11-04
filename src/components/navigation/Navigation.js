import { useState } from "react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav className="navbar">
      <a
        className="link-home"
        href="#home-page"
        onClick={() => props.handleClickPage("home")}
        style={{
          backgroundColor: props.page === "home" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            props.page === "home"
              ? "/assets/home-icon-fullblack.png"
              : "/assets/home-icon.png"
          }
          alt="home icon"
          width="40px"
        />
      </a>
      <a
        className="link-bookmark"
        href="#bookmark-page"
        onClick={() => props.handleClickPage("bookmark")}
        style={{
          backgroundColor: props.page === "bookmark" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            props.page === "bookmark"
              ? "assets/bookmark-icon-fullblack.png"
              : "assets/bookmark-icon.png"
          }
          alt="bookmark icon"
          width="40px"
        />
      </a>
      <a
        className="link-form"
        href="#create-page"
        onClick={() => props.handleClickPage("create")}
        style={{
          backgroundColor: props.page === "create" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            props.page === "create"
              ? "/assets/form-icon-fullblack.png"
              : "/assets/form-icon.png"
          }
          alt="form icon"
          width="40px"
        />
      </a>
      <a
        className="link-profile"
        href="#profile-page"
        onClick={() => props.handleClickPage("profile")}
        style={{
          backgroundColor: props.page === "profile" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            props.page === "profile"
              ? "/assets/profile-icon-fullblack.png"
              : "/assets/profile-icon.png"
          }
          alt="profile icon"
          width="40px"
        />
      </a>
    </nav>
  );
}

export default Navigation;
