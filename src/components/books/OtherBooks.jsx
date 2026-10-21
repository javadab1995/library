import styles from "./OtherBooks.module.css";

function HighlightText({ text = "", keyword = "" }) {
  if (!text) return <p>توضیحی برای این اثر ثبت نشده است.</p>;
  if (!keyword) return <p>{text}</p>;

  const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));

  return (
    <p>
      {parts.map((part, index) =>
        part.toLocaleLowerCase("fa") === keyword.toLocaleLowerCase("fa") ? (
          <strong key={index}>{part}</strong>
        ) : (
          part
        ),
      )}
    </p>
  );
}

function OtherBooks({ book }) {
  if (!book) return null;

  return (
    <article className={styles.cart}>
      {book.image && (
        <div className={styles.bookProfile}>
          <img src={book.image} alt={`جلد ${book.name}`} loading="lazy" />
        </div>
      )}

      <div className={styles.bookDescription}>
        <h3>{book.name}</h3>
        <HighlightText text={book.description} keyword={book.name} />
      </div>
    </article>
  );
}

export default OtherBooks;
