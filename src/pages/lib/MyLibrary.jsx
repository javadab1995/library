import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiBookOpen, FiBookmark, FiTrash2 } from "react-icons/fi";

import { useBooks } from "../../context/BookContext";
import Footer from "../../components/fotter/Footer";
import styles from "./MyLibrary.module.css";
import Header from "../../components/header/Header";

const STORAGE_KEY = "ketaba-my-library-ids";

function readSavedIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    return Array.isArray(saved) ? [...new Set(saved.map(String))] : [];
  } catch {
    return [];
  }
}

function MyLibrary() {
  const { books = [], isLoading } = useBooks();
  const [savedIds, setSavedIds] = useState(readSavedIds);

  useEffect(() => {
    function handleStorage(event) {
      if (event.key === STORAGE_KEY) {
        setSavedIds(readSavedIds());
      }
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const savedBooks = books.filter((book) => savedIds.includes(String(book.id)));

  function handleRemove(bookId) {
    const nextIds = savedIds.filter((id) => id !== String(bookId));

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
      setSavedIds(nextIds);
    } catch {
      // اگر ذخیره‌سازی در دسترس نباشد، فهرست را تغییر نمی‌دهیم.
    }
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <header className={styles.heading}>
          <div className={styles.headingIcon}>
            <FiBookOpen aria-hidden="true" />
          </div>

          <div>
            <p className={styles.eyebrow}>فضای شخصی تو</p>
            <h1>کتابخانه من</h1>
            <p className={styles.description}>
              کتاب‌هایی که انتخاب کرده‌ای، اینجا منتظر تو هستند.
            </p>
          </div>

          <div className={styles.count}>
            <span>{savedBooks.length}</span>
            <span>کتاب</span>
          </div>
        </header>

        <div className={styles.sectionHeading}>
          <h2>قفسه‌ی کتاب‌ها</h2>
          <span>
            {savedBooks.length === 0
              ? "هنوز کتابی اضافه نشده"
              : `${savedBooks.length} کتاب در مجموعه‌ات`}
          </span>
        </div>

        {isLoading ? (
          <div className={styles.message} role="status">
            در حال آماده‌کردن کتابخانه...
          </div>
        ) : savedBooks.length === 0 ? (
          <section className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <FiBookmark aria-hidden="true" />
            </div>

            <h2>قفسه‌ات هنوز خالی است</h2>
            <p>
              از صفحه‌ی کتابخانه، کتاب‌هایی را که دوست داری به مجموعه‌ی شخصی‌ات
              اضافه کن.
            </p>

            <Link to="/app" className={styles.browseButton}>
              <FiBookOpen aria-hidden="true" />
              دیدن کتاب‌ها
            </Link>
          </section>
        ) : (
          <section className={styles.shelfArea} aria-label="کتاب‌های ذخیره‌شده">
            <div className={styles.bookGrid}>
              {savedBooks.map((book) => (
                <article className={styles.book} key={book.id}>
                  <div className={styles.cover}>
                    {book.image ? (
                      <img
                        src={book.image}
                        alt={`جلد ${book.name || book.title || "کتاب"}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.noCover}>
                        <FiBookOpen aria-hidden="true" />
                        <span>{book.name || book.title || "بدون عنوان"}</span>
                      </div>
                    )}
                  </div>

                  <div className={styles.bookInfo}>
                    <h3>{book.name || book.title || "کتاب بدون عنوان"}</h3>
                    <p>
                      {typeof book.writer === "object" && book.writer !== null
                        ? book.writer.name
                        : book.writer || book.author || "نام نویسنده ثبت نشده"}
                    </p>

                    <button
                      type="button"
                      className={styles.removeButton}
                      onClick={() => handleRemove(book.id)}
                      aria-label={`حذف ${book.name || book.title || "کتاب"} از کتابخانه`}
                    >
                      <FiTrash2 aria-hidden="true" />
                      <span>حذف از کتابخانه</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.shelf} aria-hidden="true" />
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default MyLibrary;
