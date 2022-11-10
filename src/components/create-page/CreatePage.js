import "./CreatePage.css";
import { useState } from "react";
import Form from "../form/Form";
import Newcard from "../new-card/NewCard";

export default function CreatePage({ page, onNewCard, cards }) {
  // const [createdCard, setCreatedCard] = useState(null);
  // const [newQuestion, setNewQuestion] = useState("");
  // const [newAnswer, setNewAnswer] = useState("");

  // const createNewCard = (newQuestion, newAnswer) => {
  //   setNewQuestion(newQuestion);
  //   setNewAnswer(newAnswer);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const { createdQuestion, createdAnswer } = form.elements;
  //   createNewCard(createdQuestion.value, createdAnswer.value);
  //   form.reset();
  // };

  // console.log(newQuestion, newAnswer);

  // const handleQuestionInput = (event) => {
  //   setNewQuestion(event.target.value);
  // };

  // const handleAnswerInput = (event) => {
  //   setNewAnswer(event.target.value);
  // };

  // const createCard = () => {
  //   setCreatedCard({
  //     question: newQuestion,
  //     answer: newAnswer,
  //     tags: [],
  //   });
  // };

  // const addCreatedCard = () => {
  //   onNewCard({
  //     id: cards.length === 0 ? 1 : cards[cards.length - 1].id + 1,
  //     question: newQuestion,
  //     answer: newAnswer,
  //     tags: [],
  //   });
  // };

  // const onSubmitCreatedCard = () => {
  //   return (
  //     <article className="Card-container">
  //       <p>Your question:</p>
  //       <p className="question">{newQuestion}</p>
  //       <p>Your answer:</p>
  //       <p className="answer">{newAnswer}</p>
  //       <button
  //         onClick={(event) => {
  //           event.preventDefault();
  //           addCreatedCard();
  //         }}
  //       >
  //         Add card to home
  //       </button>
  //       <button>Add card to bookmarks</button>
  //       <button>Delete card</button>
  //     </article>
  //   );
  // };
  // console.log(createdCard);

  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const createCard = (newQuestion, newAnswer) => {
    setNewQuestion(newQuestion);
    setNewAnswer(newAnswer);
  };

  return (
    <section
      className="page"
      id="create-page"
      data-js="page-create"
      style={{ display: page === "create" ? "block" : "none" }}
    >
      <h2>Here you can create your own question cards</h2>
      <Form onCreateCard={createCard} />
      <Newcard newQuestion={newQuestion} newAnswer={newAnswer} />
    </section>
  );
}
