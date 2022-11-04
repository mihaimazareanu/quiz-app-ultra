import "../bookmark-page/BookmarkPage.css";

export default function BookmarkPage(props) {
  return (
    <section
      className="page"
      id="bookmark-page"
      data-js="page-bookmarked"
      style={{ display: props.page === "bookmark" ? "block" : "none" }}
    >
      <p>Here you will see my bookmarks.</p>
    </section>
  );
}
