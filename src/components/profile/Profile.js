import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <section
      className="page"
      id="profile-page"
      data-js="page-profile"
      style={{ display: props.page === "profile" ? "block" : "none" }}
    >
      <p>Here you will see my details.</p>
    </section>
  );
}

export default Profile;
