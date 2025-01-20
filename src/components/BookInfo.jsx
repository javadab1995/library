
import styles from "./BookInfo.module.css";
import Spinner from "./Spinner"
import { useBooks } from "../context/BookContext.jsx";
import StarRating from "./hooks/StarRateing.jsx";
function BookInfo() {
 const {selectedItem, isLoadig } = useBooks()
  if(isLoadig) return <Spinner />
  return (
    <main className={styles.main}>
      <section className={styles.imgSec}>
        <div className={styles.imageHolder}>
          <img src={selectedItem.image ==="" ? null : selectedItem.image} alt={selectedItem.name} />
        </div>
        <StarRating />
      </section>
      <section className={styles.section}>
        <h1>
          <small>نام کتاب:</small>
          {selectedItem.name}
        </h1>
        <div className={styles.summary}>
          <small>بریده:</small>
          <q>{selectedItem.summary}</q>
        </div>
        <span>
          <small>تاریخ نشر:</small>
          {selectedItem.publicationDate}
        </span>
        <span>
          <small>ژانر:</small>
          {selectedItem.literaryGenre}
        </span>
        {selectedItem.translator !== "-" && (
          <span>
            <small>مترجم:</small>
            {selectedItem.translator}
          </span>
        )}

        <span>
          <small>ناشر:</small>
          {selectedItem.publisher}
        </span>

        <span>
          <small>زبان:</small>
          {selectedItem.lng}
        </span>
        <span>
          <small>کشور:</small>
          {selectedItem.country}
        </span>
        <span>
          <small>طراح :</small>
          {selectedItem.coverDesigner}
        </span>
      </section>
    </main>
  );
}

export default BookInfo;
