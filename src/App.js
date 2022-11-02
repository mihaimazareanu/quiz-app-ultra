import "./App.css";
import Header from "./components/header/Header";
// import Card from "./components/card/Card";
import BookmarkPage from "./components/bookmark-page/BookmarkPage";
import CreatePage from "./components/create-page/CreatePage";
import Profile from "./components/profile/Profile";
import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home-page/HomePage";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <HomePage />
        <BookmarkPage />
        <CreatePage />
        <Profile />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
