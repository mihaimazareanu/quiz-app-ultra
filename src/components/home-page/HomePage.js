import "./HomePage.css";
import { cards } from "../../data/cards";
import { Card } from "../card/Card";

export default function HomePage() {
  return (
    <section className="page current" id="home-page" data-js="page-home">
      <div class="question">
        {cards.map(({ question, answer, tags }) => {
          return <Card question={question} answer={answer} tags={tags} />;
        })}
      </div>
    </section>
  );
}
