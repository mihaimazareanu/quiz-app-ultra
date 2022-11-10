export default function NewCard({newQuestion, newAnswer}) {
return (
    <>
    <article className="Card-container">
      <button
        className="top-right noborder"
        // onClick={() => {
        //   onClickBookmarkIcon();
        // }}
      >
        <img
          src=/*{
            card.isBookmarked
              ? "assets/bookmark-icon-fullblack.png"
              : */"assets/bookmark-icon.png"
          //}
          alt="bookmark icon"
          width="30px"
        ></img>
      </button>
      <p className="question">{newQuestion}</p>
      <button
        className="answer-button"
        // onClick={() => {
        //   setHide(!hide);
        // }}
      >
       {/* {hide ? "Show Answer" : "Hide Answer"} */}
      </button>
      <p /*className={hide ? "hidden" : "answer"}*/>{newAnswer}</p>
      {/* <ul className="Card__taglist">
        {card.tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </ul> */}
    </article>
    </>
)
}