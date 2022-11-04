import "./App.css";
import Header from "./components/header/Header";
// import Card from "./components/card/Card";
import BookmarkPage from "./components/bookmark-page/BookmarkPage";
import CreatePage from "./components/create-page/CreatePage";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const handleClickPage = (pageName) => {
    setPage(pageName);
  };
  return (
    <div className="App">
      <main>
        <Header />
        <HomePage page={page} setPage={setPage} />
        <BookmarkPage page={page} setPage={setPage} />
        <CreatePage page={page} setPage={setPage} />
        <Profile page={page} setPage={setPage} />
      </main>
      <Navigation
        page={page}
        setPage={setPage}
        handleClickPage={handleClickPage}
      />
    </div>
  );
}

export default App;
