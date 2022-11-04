import "../bookmark-page/BookmarkPage.css";
import { cards } from "../../data/cards";
import { Card } from "../card/Card";
import { useState } from "react";

export default function BookmarkPage(props) {
  const [bookmarkedCards, setBookmarkedCards] = useState(
    cards.map((card) => card.isBookmarked)
  );
  console.log(bookmarkedCards);
  const handleClickBookmarkIcon = (index) => {
    setBookmarkedCards([
      ...bookmarkedCards.slice(0, index - 1),
      !bookmarkedCards[index],
      ...bookmarkedCards.slice(index + 1),
    ]);
  };
  return (
    <section
      className="page"
      id="bookmark-page"
      data-js="page-bookmarked"
      style={{ display: props.page === "bookmark" ? "block" : "none" }}
    >
      <h2>These are your bookmarked question cards:</h2>

      {cards.map((card, index) => {
        return (
          <>
            {card.isBookmarked ? (
              <Card
                key={index}
                question={card.question}
                answer={card.answer}
                tags={card.tags}
                isBookmarked={bookmarkedCards[index]}
                page={props.page}
                handleClickBookmarkIcon={handleClickBookmarkIcon}
                index={index}
              />
            ) : undefined}
          </>
        );
      })}
    </section>
  );
}
