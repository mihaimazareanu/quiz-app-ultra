export default function Form({ onCreateCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { addQuestion, addAnswer } = form.elements;
    onCreateCard(addQuestion.value, addAnswer.value);
    form.reset();
  }
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <label htmlFor="addQuestion" className="label-add-question">
        What question would you like to add?
      </label>
      <input
        // onChange={handleQuestionInput}
        id="addQuestion"
        type="text"
        placeholder="Please type your question..."
        name="add-question"
        // value="add-question"
      />
      <label htmlFor="addAnswer" className="label-add-answer">
        What is the answer to your question?
      </label>
      <input
        // onChange={handleAnswerInput}
        id="addAnswer"
        type="text"
        placeholder="Please type your answer..."
        name="add-answer"
      />

      <p className="ptag">What would be the relevant tags for your question?</p>
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
        // onClick={(event) => {
        //   event.preventDefault();
        // createCard();
        // }}
      >
        Create card
      </button>
    </form>
  );
}
