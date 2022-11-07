import "./HomePage.css";
//import { cards } from "../../data/cards";
import { Card } from "../card/Card";

export default function HomePage({ page, cards, onToggleBookmark }) {
  const handleClickBookmarkIcon = (indexToChange) => {
    onToggleBookmark(indexToChange);
  };
  return (
    <section
      className="page"
      id="home-page"
      data-js="page-home"
      style={{ display: page === "home" ? "block" : "none" }}
    >
      <div className="question-card">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              onClickBookmarkIcon={() => {
                handleClickBookmarkIcon(index);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
