import {
  FiCalendar,
  FiTag,
  
  FiGlobe,
  FiBook,
  FiPenTool,
} from "react-icons/fi";

import styles from "./BookInfo.module.css";
import { useBooks } from "../../context/BookContext.jsx";
import MyLibraryButton from "../buttons/MyLibraryButton.jsx"
import Spinner from "../widgets/Spinner.jsx";
import { LuLanguages } from "react-icons/lu";

function BookInfo() {
  const { selectedItem, isLoading } = useBooks();

  if (isLoading) return <Spinner />;

  if (!selectedItem) {
    return <p>کتابی برای نمایش انتخاب نشده است.</p>;
  }

 const details = [
   {
     label: "تاریخ نشر",
     value: selectedItem.publicationDate,
     icon: FiCalendar,
   },
   {
     label: "ژانر",
     value: selectedItem.literaryGenre,
     icon: FiTag,
   },
   {
     label: "مترجم",
     value: selectedItem.translator,
     icon: LuLanguages,
   },
   {
     label: "ناشر",
     value: selectedItem.publisher,
     icon: FiBook,
   },
   {
     label: "زبان",
     value: selectedItem.lng,
     icon: FiGlobe,
   },
   {
     label: "کشور",
     value: selectedItem.country,
     icon: FiGlobe,
   },
   {
     label: "طراح جلد",
     value: selectedItem.coverDesigner,
     icon: FiPenTool,
   },
 ].filter(
   (item) => item.value && item.value !== "-" && item.value !== "نامشخص",
 );

  return (
    <main className={styles.main}>
      <section className={styles.imgSec}>
        <div className={styles.imageHolder}>
          {selectedItem.image ? (
            <img src={selectedItem.image} alt={`جلد ${selectedItem.name}`} />
          ) : (
            <div className={styles.imagePlaceholder}>بدون تصویر جلد</div>
          )}
        </div>

        <div className={styles.rating}>
          <MyLibraryButton bookId={selectedItem.id} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>شناسنامه کتاب</span>
          <h1>{selectedItem.name}</h1>
        </div>

        {selectedItem.summary && (
          <div className={styles.summary}>
            <h2>درباره کتاب</h2>
            <p>{selectedItem.summary}</p>
          </div>
        )}

        <div className={styles.metadata}>
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <div className={styles.metadataRow} key={item.label}>
                <span className={styles.label}>
                  <Icon className={styles.metadataIcon} aria-hidden="true" />
                  {item.label}
                </span>

                <span className={styles.value}>{item.value}</span>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default BookInfo;
