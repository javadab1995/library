import Footer from "../../components/fotter/Footer";
import Header from "../../components/header/Header";
import styles from "./AboutUs.module.css";

const aboutSections = [
  {
    id: "introduction",
    eyebrow: "درباره کتابا",
    title: "یادگیری، نزدیک‌تر از همیشه",
    image: "/images/ebook_book.png",
    imageAlt: "تصویر کتاب و مطالعه دیجیتال",
    text: "همراه علم یک شرکت دانش‌بنیان در حوزه فناوری مطالعه و یادگیری الکترونیکی است. این مجموعه برای دانشجویان، استادان دانشگاه، مدیران و متخصصان شرایطی فراهم کرده تا با استفاده از روش‌هایی جذاب و سازگار با محیط بومی، به نتایج بهتر علمی و پژوهشی دست یابند. با بهره‌گیری از فناوری‌های روز و محتوای پژوهش‌محور، تلاش می‌کنیم دسترسی به دانش را ساده‌تر و تجربه مطالعه را مؤثرتر کنیم.",
    className: "",
  },
  {
    id: "mission",
    eyebrow: "مأموریت ما",
    title: "فرصتی تازه برای مطالعه",
    image: "/images/pic3.png",
    imageAlt: "تصویری مرتبط با مطالعه و یادگیری",
    text: "هدف ما فراهم‌کردن بستری مناسب برای افرادی است که ترجیح می‌دهند یا نیاز دارند کتاب‌های خود را به‌صورت الکترونیکی مطالعه کنند؛ همچنین ناشرانی که می‌خواهند آثارشان را در قالب دیجیتال منتشر کنند. تلاش می‌کنیم با استفاده از فناوری‌های مناسب، تجربه مطالعه را برای خوانندگان بهتر کنیم و در کنار آن، به نیازهای ناشران نیز توجه داشته باشیم.",
    className: styles.reverse,
  },
  {
    id: "vision",
    eyebrow: "چشم‌انداز ما",
    title: "همراه رشد و پیشرفت",
    image: "/images/saze.png",
    imageAlt: "تصویری نمادین از رشد و یادگیری",
    text: "با فراهم‌کردن اطلاعات مفید و دسترسی آسان‌تر به منابع آموزشی، می‌خواهیم به رشد توانایی‌های فردی و علمی کمک کنیم. باور داریم دسترسی بهتر به دانش می‌تواند فرصت‌های تازه‌ای برای یادگیری، پژوهش و پیشرفت ایجاد کند.",
    className: "",
  },
];

function AboutUs() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <header className={styles.intro}>
          <span className={styles.eyebrow}>درباره ما</span>
          <h1 className={styles.pageTitle}>داستان کتابا</h1>
          <p className={styles.introText}>
            فضایی برای نزدیک‌تر شدن به کتاب، یادگیری و دنیای دانش.
          </p>
        </header>

        <div className={styles.sections}>
          {aboutSections.map((section) => (
            <section
              key={section.id}
              className={`${styles.section} ${section.className}`}
              aria-labelledby={`${section.id}-title`}
            >
              <div className={styles.summary}>
                <span className={styles.eyebrow}>{section.eyebrow}</span>
                <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                  {section.title}
                </h2>
                <p>{section.text}</p>
              </div>

              <div className={styles.imageHolder}>
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </section>
          ))}
        </div>

        <section className={styles.visualSection} aria-hidden="true">
          <img
            className={styles.circle}
            src="/images/cercle-shape.png"
            alt=""
            loading="lazy"
          />
          <img
            className={styles.mainImage}
            src="/images/main.png"
            alt=""
            loading="lazy"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutUs;
