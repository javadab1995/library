import { useState } from "react";
import styles from "./AppBox.module.css";
import DetailsBox from "../books/DetailsBox";
import ListBox from "../lists/ListBox";

function AppBox({ searchQuery }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={styles.box} aria-label="کتابخانه">
      <div className={styles.tabs} role="tablist" aria-label="بخش‌های کتابخانه">
        <button
          type="button"
          id="books-tab"
          role="tab"
          aria-selected={currentIndex === 0}
          aria-controls="books-panel"
          className={`${styles.tab} ${
            currentIndex === 0 ? styles.activeTab : ""
          }`}
          onClick={() => setCurrentIndex(0)}
        >
          فهرست کتاب‌ها
        </button>

        <button
          type="button"
          id="details-tab"
          role="tab"
          aria-selected={currentIndex === 1}
          aria-controls="details-panel"
          className={`${styles.tab} ${
            currentIndex === 1 ? styles.activeTab : ""
          }`}
          onClick={() => setCurrentIndex(1)}
        >
          جزئیات کتاب
        </button>
      </div>

      <div
        id="books-panel"
        role="tabpanel"
        aria-labelledby="books-tab"
        hidden={currentIndex !== 0}
        className={`${styles.panel} ${
          currentIndex === 0 ? styles.activePanel : ""
        }`}
      >
        <ListBox searchQuery={searchQuery} />
      </div>

      <div
        id="details-panel"
        role="tabpanel"
        aria-labelledby="details-tab"
        hidden={currentIndex !== 1}
        className={`${styles.panel} ${
          currentIndex === 1 ? styles.activePanel : ""
        }`}
      >
        <DetailsBox />
      </div>
    </section>
  );
}

export default AppBox;
