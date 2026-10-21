import { useState } from "react";
import styles from "./WriterInfo.module.css";
import OtherBooks from "../books/OtherBooks";
import { useBooks } from "../../context/BookContext.jsx";
import Spinner from "../widgets/Spinner.jsx";
import { BiChevronLeft } from "react-icons/bi";

function WriterInfo() {
  const [selectedOtherBook, setSelectedOtherBook] = useState(null);
  const { selectedItem, isLoading } = useBooks();

  if (isLoading) return <Spinner />;

  const writer = selectedItem?.writer;

  if (!writer) {
    return (
      <section className={styles.section}>
        <p className={styles.emptyMessage}>
          اطلاعاتی برای نمایش نویسنده وجود ندارد.
        </p>
      </section>
    );
  }

  const otherBooks = Array.isArray(writer.otherBook) ? writer.otherBook : [];

  return (
    <section className={styles.section}>
      <div className={styles.bio}>
        <div className={styles.profile}>
          <div className={styles.imagesHolder}>
            {writer.image ? (
              <img src={writer.image} alt={`تصویر ${writer.name}`} />
            ) : (
              <div className={styles.imagePlaceholder}>بدون تصویر</div>
            )}
          </div>

          <h1>{writer.name}</h1>
          <span className={styles.profileLabel}>درباره نویسنده</span>
        </div>

        <div className={styles.biography}>
          <h2>زندگی و آثار</h2>
          <p>{writer.bio || "زندگی‌نامه‌ای برای این نویسنده ثبت نشده است."}</p>
        </div>
      </div>

      <div className={styles.books}>
        <div className={styles.booksList}>
          <div className={styles.booksHeading}>
            <h2>آثار دیگر</h2>
            <span>{otherBooks.length} عنوان</span>
          </div>

          {otherBooks.length > 0 ? (
            <ul>
              {otherBooks.map((book, index) => (
                <li key={book.id ?? `${book.name}-${index}`}>
                  <button
                    type="button"
                    className={
                      selectedOtherBook === book
                        ? styles.selectedBook
                        : styles.bookButton
                    }
                    onClick={() =>
                      setSelectedOtherBook((current) =>
                        current === book ? null : book,
                      )
                    }
                    aria-pressed={selectedOtherBook === book}
                  >
                    <span>{book.name}</span>
                    <span className={styles.bookArrow} aria-hidden="true">
                      <BiChevronLeft />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyMessage}>
              اثر دیگری برای این نویسنده ثبت نشده است.
            </p>
          )}
        </div>

        {selectedOtherBook && (
          <div className={styles.otherBookDetails}>
            <OtherBooks book={selectedOtherBook} />
          </div>
        )}
      </div>
    </section>
  );
}

export default WriterInfo;
