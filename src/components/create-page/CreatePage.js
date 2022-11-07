import "./CreatePage.css";

export default function CreatePage(props) {
  return (
    <section
      className="page"
      id="create-page"
      data-js="page-create"
      style={{ display: props.page === "create" ? "block" : "none" }}
    >
      <h2>Here you can create your own question cards</h2>
      <form className="create-form">
        <label className="label-add-question" htmlFor="add-question">
          What question would you like to add?
        </label>
        <input
          onChange={props.handleChangeQuestionInput}
          id="add-question"
          type="text"
          placeholder="Please type your question..."
          name="add-question"
          // value="add-question"
        />
        <label className="label-add-answer" htmlFor="add-answer">
          What is the answer to your question?
        </label>
        <input
          onChange={props.handleChangeAnswerInput}
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
        <button className="add-card" onClick={props.addCard}>
          Create card
        </button>
      </form>
      <ul className="no-list">
        {/* <NewCard
          cardsList={props.cardsList}
          isBookmarked={props.isBookmarked}
          question={props.newQuestion}
          answer={props.newAnswer}
          hide={props.hide}
          setHide={props.setHide}
        /> */}
      </ul>
    </section>
  );
}
