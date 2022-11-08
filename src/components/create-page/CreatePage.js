import "./CreatePage.css";
import { useState } from "react";
// import { cards } from "../../data/cards";

export default function CreatePage({ page, onNewCard, cards }) {
  const [createdCard, setCreatedCard] = useState(null);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleQuestionInput = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleAnswerInput = (event) => {
    setNewAnswer(event.target.value);
  };

  const createCard = () => {
    setCreatedCard({
      question: newQuestion,
      answer: newAnswer,
      tags: [],
    });
  };

  const addCreatedCard = () => {
    onNewCard({
      id: cards.length === 0 ? 1 : cards[cards.length - 1].id + 1,
      question: newQuestion,
      answer: newAnswer,
      tags: [],
    });
  };

  const onSubmitCreatedCard = () => {
    return (
      <article className="Card-container">
        <p>Your question:</p>
        <p className="question">{newQuestion}</p>
        <p>Your answer:</p>
        <p className="answer">{newAnswer}</p>
        <button
          onClick={(event) => {
            event.preventDefault();
            addCreatedCard();
          }}
        >
          Add card to home
        </button>
        <button>Add card to bookmarks</button>
        <button>Delete card</button>
      </article>
    );
  };
  console.log(createdCard);
  return (
    <section
      className="page"
      id="create-page"
      data-js="page-create"
      style={{ display: page === "create" ? "block" : "none" }}
    >
      <h2>Here you can create your own question cards</h2>
      <form
        className="create-form"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitCreatedCard();
        }}
      >
        <label htmlFor="add-question" className="label-add-question">
          What question would you like to add?
        </label>
        <input
          onChange={handleQuestionInput}
          id="add-question"
          type="text"
          placeholder="Please type your question..."
          name="add-question"
          // value="add-question"
        />
        <label htmlFor="add-answer" className="label-add-answer">
          What is the answer to your question?
        </label>
        <input
          onChange={handleAnswerInput}
          id="add-answer"
          type="text"
          placeholder="Please type your answer..."
          name="add-answer"
        />

        <p className="ptag">
          What would be the relevant tags for your question?
        </p>
        <div className="tags-container">
          <input id="html" type="checkbox" name="html" />
          <label className="label" htmlFor="html">
            #html
          </label>
          <input id="css" type="checkbox" name="css" />
          <label className="label" htmlFor="css">
            #css
          </label>
          <input id="javascript" type="checkbox" name="javascript" />
          <label className="label" htmlFor="javascript">
            #javascript
          </label>
        </div>
        <button
          className="add-card"
          onClick={(event) => {
            event.preventDefault();
            createCard();
          }}
        >
          Create card
        </button>
      </form>
    </section>
  );
}
