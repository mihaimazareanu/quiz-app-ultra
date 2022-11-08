import "./Navigation.css";

function Navigation({ page, handleClickPage }) {
  return (
    <nav className="navbar">
      <a
        className="link-home"
        href=""
        onClick={(event) => {
          event.preventDefault();
          handleClickPage("home");
        }}
        style={{
          backgroundColor: page === "home" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            page === "home"
              ? "/assets/home-icon-fullblack.png"
              : "/assets/home-icon.png"
          }
          alt="home icon"
          width="40px"
        />
      </a>
      <a
        className="link-bookmark"
        href=""
        onClick={(event) => {
          event.preventDefault();
          handleClickPage("bookmark");
        }}
        style={{
          backgroundColor: page === "bookmark" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            page === "bookmark"
              ? "assets/bookmark-icon-fullblack.png"
              : "assets/bookmark-icon.png"
          }
          alt="bookmark icon"
          width="40px"
        />
      </a>
      <a
        className="link-form"
        href=""
        onClick={(event) => {
          event.preventDefault();
          handleClickPage("create");
        }}
        style={{
          backgroundColor: page === "create" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            page === "create"
              ? "/assets/form-icon-fullblack.png"
              : "/assets/form-icon.png"
          }
          alt="form icon"
          width="40px"
        />
      </a>
      <a
        className="link-profile"
        href=""
        onClick={(event) => {
          event.preventDefault();
          handleClickPage("profile");
        }}
        style={{
          backgroundColor: page === "profile" ? "red" : "sandybrown",
        }}
      >
        <img
          src={
            page === "profile"
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
