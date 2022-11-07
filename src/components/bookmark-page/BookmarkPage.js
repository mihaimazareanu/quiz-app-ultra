import "../bookmark-page/BookmarkPage.css";
import { Card } from "../card/Card";

export default function BookmarkPage(props) {
  const handleClickBookmarkIcon = (indexToChange) => {
    props.onToggleBookmark(indexToChange);
  };
  const lengthOfCards = props.cards.filter((card) => card.isBookmarked).length;
  console.log(lengthOfCards);
  if (lengthOfCards === 0) {
    return <h3>You haven't bookmarked any questions yet.</h3>;
  } else {
    return (
      <section
        className="page"
        id="bookmark-page"
        data-js="page-bookmarked"
        style={{ display: props.page === "bookmark" ? "block" : "none" }}
      >
        {props.cards.map((card, index) => {
          if (card.isBookmarked) {
            return (
              <>
                <h2>These are your bookmarked question cards:</h2>
                <Card
                  key={index}
                  card={card}
                  onClickBookmarkIcon={() => {
                    handleClickBookmarkIcon(index);
                  }}
                />
              </>
            );
          }
          <></>;
        })}
      </section>
    );
  }
}
