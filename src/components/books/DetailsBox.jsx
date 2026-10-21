import { NavLink, Outlet } from "react-router-dom";
import styles from "./DetailsBox.module.css";
import { useBooks } from "../../context/BookContext.jsx";
import Spinner from "../widgets/Spinner.jsx";

function DetailsBox() {
  const { selectedItem, isLoading } = useBooks();

  if (isLoading) {
    return <Spinner />;
  }

  if (!selectedItem) {
    return (
      <div className={styles.details}>
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon} aria-hidden="true">
            ◫
          </span>
          <h2>کتابی انتخاب نشده است</h2>
          <p>
            از فهرست کتاب‌ها، یک عنوان را انتخاب کن تا جزئیات آن نمایش داده شود.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.details}>
      <nav aria-label="اطلاعات کتاب">
        <ul className={styles.nav}>
          <li>
            <NavLink to="book">مشخصات کتاب</NavLink>
          </li>
          <li>
            <NavLink to="writer">درباره نویسنده</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default DetailsBox;
