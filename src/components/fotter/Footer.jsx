import styles from "./Footer.module.css";

const faqs = [
  {
    question: "چطور می‌توانم وارد کتابخانه شوم؟",
    answer:
      "از طریق گزینه ورود در بالای صفحه وارد شوید. پس از ورود می‌توانید به بخش کتابخانه دسترسی پیدا کنید.",
  },
  {
    question: "چطور مشخصات حسابم را ویرایش کنم؟",
    answer:
      "در صورت فعال بودن بخش پروفایل، می‌توانید پس از ورود به حساب کاربری، اطلاعات خود را ویرایش کنید.",
  },
  {
    question: "اگر رمز عبورم را فراموش کنم چه کار کنم؟",
    answer:
      "در حال حاضر، روش بازیابی رمز عبور باید متناسب با سیستم احراز هویت سایت پیاده‌سازی شود.",
  },
  {
    question: "چطور کتاب‌های موردنظرم را پیدا کنم؟",
    answer:
      "به بخش کتابخانه بروید و از امکانات جست‌وجو و مرور کتاب‌ها برای پیدا کردن عنوان موردنظرتان استفاده کنید.",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.about}>
          <a href="/" className={styles.brand} aria-label="کتابا، صفحه اصلی">
            <img src="/images/logo.png" alt="" />
            <span>کتابا</span>
          </a>

          <p>
            کتابا فضایی برای کشف کتاب‌ها، آشنایی با نویسندگان و پیدا کردن
            عنوان‌هایی است که ارزش خواندن دارند. گاهی یک کتاب خوب، مسیر تازه‌ای
            پیش روی ما می‌گذارد.
          </p>
        </section>

        <section className={styles.faq}>
          <h2 className={styles.heading}>سؤالات متداول</h2>

          <div className={styles.faqList}>
            {faqs.map(({ question, answer }) => (
              <details className={styles.faqItem} key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.contact}>
          <h2 className={styles.heading}>ارتباط با ما</h2>

          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>ایمیل</span>
              <a href="mailto:ketaba@info.ir">ketaba@info.ir</a>
            </li>

            <li>
              <span className={styles.contactLabel}>تلفن</span>
              <a href="tel:021321400">021321400</a>
            </li>
          </ul>
        </section>
      </div>

      <div className={styles.bottom}>
        <p>© تمامی حقوق این وب‌سایت محفوظ است.</p>
      </div>
    </footer>
  );
}

export default Footer;
