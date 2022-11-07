import "./App.css";
import Header from "./components/header/Header";
import BookmarkPage from "./components/bookmark-page/BookmarkPage";
import CreatePage from "./components/create-page/CreatePage";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";
import { cards as initialCards } from "./data/cards";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const handleClickPage = (pageName) => {
    setPage(pageName);
  };
  const [cards, setCards] = useState(initialCards);

  const handleToggleBookmark = (indexToToggle) => {
    setCards(
      cards.map((card, index) => {
        return {
          ...card,
          isBookmarked:
            index === indexToToggle ? !card.isBookmarked : card.isBookmarked,
        };
      })
    );
  };

  return (
    <div className="App">
      <main>
        <Header />
        <HomePage
          page={page}
          cards={cards}
          onToggleBookmark={handleToggleBookmark}
        />
        <BookmarkPage
          page={page}
          cards={cards}
          onToggleBookmark={handleToggleBookmark}
        />
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
