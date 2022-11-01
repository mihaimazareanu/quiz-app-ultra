import React from "react";
import "./Card.css";

function Card() {
  return (
    <section class="card">
      <p class="question">This is the question.</p>
      <button class="answer-button">Show Answer</button>
      <p class="answer">This is the answer to the question.</p>
    </section>
  );
}

export default Card;
