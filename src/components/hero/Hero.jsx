import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../components/header/Header";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Header />

      <div className={styles.heroContent}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>جایی برای کشف دنیایی تازه</span>

          <h1 id="hero-title" className={styles.title}>
            کتابخانه آنلاین
            <span>کتاب‌هایی که باید بخوانید</span>
          </h1>

          <p className={styles.description}>
            در کتابا با نوشته‌های نویسندگان بزرگ آشنا شوید، کتاب موردعلاقه‌تان
            را پیدا کنید و از دریچه کلمات، دنیاهای تازه‌ای را تجربه کنید.
          </p>

          <Link to="/app" className={styles.cta}>
            <span>ورود به کتابخانه</span>
            <FiArrowLeft aria-hidden="true" />
          </Link>

          <p className={styles.caption}>
            برای کنجکاوان، خیال‌پردازان و عاشقان کلمه
          </p>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.greenShape} />
          <div className={styles.creamShape} />
          <div className={styles.smallShape} />

          <div className={styles.bookStack}>
            <div className={`${styles.book} ${styles.bookBack}`}>
              <span>هنرِ دیدن</span>
            </div>

            <div className={`${styles.book} ${styles.bookMiddle}`}>
              <span>دنیای داستان‌ها</span>
            </div>

            <div className={`${styles.book} ${styles.bookFront}`}>
              <span className={styles.bookLabel}>کتابا</span>
              <span className={styles.bookTitle}>سفر به دنیای کلمات</span>
              <span className={styles.bookDecoration} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
