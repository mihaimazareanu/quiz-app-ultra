import React from "react";
// import AnswerButton from "../answer-button/AnswerButton";
import "./Card.css";
import { useState } from "react";
import { Tag } from "../tag/Tag";

export function Card({ question, answer, tags }) {
  const [hide, setHide] = useState(false);
  const toggleAnswer = () => {
    setHide(!hide);
  };
  return (
    <article className="Card-container">
      <p className="question">{question}</p>
      <button className="answer-button" onClick={toggleAnswer}>
        {hide ? "Show Answer" : "Hide Answer"}
      </button>
      <p className={hide ? "hidden" : "answer"}>{answer}</p>
      <ul className="Card__taglist">
        {tags.map((tag, index) => (
          <Tag tag={tag} />
        ))}
      </ul>
    </article>
  );
}
