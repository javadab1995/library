import { useEffect, useState } from "react";
import { FiBookmark, FiCheck } from "react-icons/fi";
import styles from "./MyLibraryButton.module.css";

const STORAGE_KEY = "ketaba-my-library-ids";

function readSavedIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (!Array.isArray(saved)) return [];

    return [...new Set(saved.map(String))];
  } catch {
    return [];
  }
}

function MyLibraryButton({ bookId }) {
  const [savedIds, setSavedIds] = useState(readSavedIds);

  const normalizedId =
    bookId === null || bookId === undefined ? null : String(bookId);

  const isSaved = normalizedId !== null && savedIds.includes(normalizedId);

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

  function handleToggle() {
    if (normalizedId === null) return;

    const nextIds = isSaved
      ? savedIds.filter((id) => id !== normalizedId)
      : [...savedIds, normalizedId];

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIds));
      setSavedIds(nextIds);
    } catch {
      // اگر فضای ذخیره‌سازی در دسترس نباشد، وضعیت ذخیره‌شدن را تغییر نمی‌دهیم.
    }
  }

  if (normalizedId === null) return null;

  return (
    <button
      type="button"
      className={`${styles.button} ${isSaved ? styles.saved : ""}`}
      onClick={handleToggle}
      aria-pressed={isSaved}
    >
      {isSaved ? (
        <FiCheck aria-hidden="true" />
      ) : (
        <FiBookmark aria-hidden="true" />
      )}

      <span>{isSaved ? "حذف از کتابخانه" : "افزودن به کتابخانه من"}</span>
    </button>
  );
}

export default MyLibraryButton;
