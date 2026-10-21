import styles from "./ListBox.module.css";
import { useBooks } from "../../context/BookContext.jsx";
import Spinner from "../widgets/Spinner.jsx";

function ListBox({ searchQuery = "" }) {
  const { books, dispatch, selectedItem, isLoading } = useBooks();

const normalizedQuery = searchQuery.trim().toLocaleLowerCase("fa");

const searchBooks = books.filter((book) =>
  (book.name ?? "").toLocaleLowerCase("fa").includes(normalizedQuery),
);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.list}>
      <ul className={styles.listItems}>
        {searchBooks.map((book) => {
          const isSelected = book.id === selectedItem?.id;

          return (
            <li key={book.id}>
              <button
                type="button"
                className={`${styles.bookItem} ${
                  isSelected ? styles.selected : ""
                }`}
                onClick={() =>
                  dispatch({
                    type: "book/loaded",
                    payload: book,
                  })
                }
                aria-pressed={isSelected}
              >
                <div className={styles.imageHolder}>
                  <img src={book.image} alt="" />
                </div>

                <h3>{book.name}</h3>
              </button>
            </li>
          );
        })}
      </ul>

      {searchBooks.length === 0 && (
        <p className={styles.emptyMessage}>کتابی با این عنوان پیدا نشد.</p>
      )}
    </div>
  );
}

export default ListBox;
