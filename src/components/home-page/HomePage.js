import "./HomePage.css";
import { cards } from "../../data/cards";
import { Card } from "../card/Card";

export default function HomePage(props) {
  return (
    <section
      className="page"
      id="home-page"
      data-js="page-home"
      style={{ display: props.page === "home" ? "block" : "none" }}
    >
      <div className="question-card">
        {cards.map(({ question, answer, tags, isBookmarked }, index) => {
          return (
            <Card
              key={index}
              question={question}
              answer={answer}
              tags={tags}
              isBookmarked={isBookmarked}
            />
          );
        })}
      </div>
    </section>
  );
}
