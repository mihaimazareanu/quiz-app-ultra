import React from "react";
// import AnswerButton from "../answer-button/AnswerButton";
import "./Card.css";
import { useState } from "react";
import { Tag } from "../tag/Tag";

export function Card({ card, onClickBookmarkIcon }) {
  const [hide, setHide] = useState(true);

  return (
    <article className="Card-container">
      <button
        className="top-right noborder"
        onClick={() => {
          onClickBookmarkIcon();
        }}
      >
        <img
          src={
            card.isBookmarked
              ? "assets/bookmark-icon-fullblack.png"
              : "assets/bookmark-icon.png"
          }
          alt="bookmark icon"
          width="30px"
        ></img>
      </button>
      <p className="question">{card.question}</p>
      <button
        className="answer-button"
        onClick={() => {
          setHide(!hide);
        }}
      >
        {hide ? "Show Answer" : "Hide Answer"}
      </button>
      <p className={hide ? "hidden" : "answer"}>{card.answer}</p>
      <ul className="Card__taglist">
        {card.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </ul>
    </article>
  );
}
