import styles from "./ListBox.module.css";
import { useBooks } from "../context/BookContext.jsx";
import Spinner from "./Spinner.jsx";


function ListBox({searchQuery }) {
  const { books, dispatch, selectedItem, isLoading } = useBooks();
 
  const searchBook = books.filter(book => book.name.includes(searchQuery));

  if(isLoading) return <Spinner />
  return (
    <div className={styles.list}>
      <ul>
        {searchBook.map((book) => (
          <li
            className={`${styles.list} ${
             book.id === selectedItem?.id ? "select" : ""
            }`}
            key={book.id}
            onClick={() => dispatch({ type: "book/loaded", payload: book })}
          >
            <div className={styles.imageHolder}>
              <img src={book.image} alt={book.name} />
            </div>
            <h3>{book.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListBox;
