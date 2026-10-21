import { Link } from "react-router-dom";
import { FiBookOpen, FiHome, FiArrowRight } from "react-icons/fi";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <div className={styles.icon} aria-hidden="true">
          <FiBookOpen />
        </div>

        <p className={styles.code}>۴۰۴</p>

        <h1>این صفحه پیدا نشد!</h1>

        <p className={styles.description}>
          انگار این صفحه لابه‌لای قفسه‌های کتابخانه گم شده. می‌توانی به کتابخانه
          برگردی و از آنجا ادامه بدهی.
        </p>

        <div className={styles.actions}>
          <Link to="/app" className={styles.primaryButton}>
            <FiHome aria-hidden="true" />
            بازگشت به کتابخانه
          </Link>

          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => window.history.back()}
          >
            <FiArrowRight aria-hidden="true" />
            صفحه قبلی
          </button>
        </div>
      </section>
    </main>
  );
}

export default PageNotFound;
