import "./CreatePage.css";

export default function CreatePage(props) {
  return (
    <section
      className="page"
      id="create-page"
      data-js="page-create"
      style={{ display: props.page === "create" ? "block" : "none" }}
    >
      <p>Here you will soon be able to create new question cards.</p>
    </section>
  );
}
