import { useState } from "react";
import styles from "./WriterInfo.module.css";
import OtherBooks from "./OtherBooks"
import { useBooks } from "../context/BookContext";
import Spinner from "./Spinner";


function WriterInfo() {
  const [isHovered, setIsHovered] = useState(null);
  const { selectedItem, isLoadig } = useBooks();
  if(isLoadig) return <Spinner />
  return (
    <section className={styles.section}>
      <div className={styles.bio}>
        <div className={styles.profile}>
          <h1>{selectedItem.writer.name}</h1>
          <div className={styles.imagesHolder}>
            <img
              src={selectedItem.writer.image}
              alt={selectedItem.writer.name}
            />
          </div>
        </div>

        <div>
          <p>{selectedItem.writer.bio}</p>
        </div>
      </div>
      <div className={styles.books}>
        <ul>
          <h4>آثار دیگر:</h4>
          {selectedItem.writer.otherBook.map((book) => (
            <li
              onMouseEnter={() => setIsHovered(book)}
              onMouseLeave={() => setIsHovered(null)}
              key={`${book.name}${Math.floor(Math.random() * 100) + 1}`} 
              
            >
              {book.name}
            </li>
          ))}
        </ul>
        {isHovered && <OtherBooks book={isHovered} />}
      </div>
    </section>
  );
}

export default WriterInfo;
