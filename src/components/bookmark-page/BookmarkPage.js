import "../bookmark-page/BookmarkPage.css";
import { Card } from "../card/Card";

export default function BookmarkPage({ page, cards, onToggleBookmark }) {
  const handleClickBookmarkIcon = (indexToChange) => {
    onToggleBookmark(indexToChange);
  };
  const lengthOfCards = cards.filter((card) => card.isBookmarked).length;
  if (lengthOfCards === 0) {
    return (
      <section
        className="page"
        id="bookmark-page"
        data-js="page-bookmarked"
        style={{ display: page === "bookmark" ? "block" : "none" }}
      >
        <h3>You haven't bookmarked any questions yet.</h3>
      </section>
    );
  } else {
    return (
      <section
        className="page"
        id="bookmark-page"
        data-js="page-bookmarked"
        style={{ display: page === "bookmark" ? "block" : "none" }}
      >
        <h2>These are your bookmarked question cards:</h2>
        {cards.map((card, index) => {
          if (card.isBookmarked) {
            return (
              <Card
                key={index}
                card={card}
                onClickBookmarkIcon={() => {
                  handleClickBookmarkIcon(index);
                }}
              />
            );
          }
          <></>;
        })}
      </section>
    );
  }
}
