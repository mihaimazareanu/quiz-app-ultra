import "./App.css";
import Header from "./components/header/Header.js";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
