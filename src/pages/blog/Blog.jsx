
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiUser } from "react-icons/fi";

import Footer from "../../components/fotter/Footer";

import styles from "./Blog.module.css";
import Header from "../../components/header/Header";

const articles = [
  {
    id: 1,
    title: "سواد اطلاعاتی",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۷/۱۰",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    title: "شابک به چه معناست؟",
    author: "هادی عبادی",
    date: "۱۴۰۵/۰۷/۰۸",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "فیپا یا فهرست‌نویسی پیش از انتشار",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۷/۰۵",
    image: "/images/blog3.png",
  },
  {
    id: 4,
    title: "آموزش کتابداری",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۶/۲۸",
    image: "/images/blog4.jpg",
  },
  {
    id: 5,
    title: "مجموعه‌سازی در کتابخانه",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۶/۲۲",
    image: "/images/blog5.jpg",
  },
  {
    id: 6,
    title: "نرم‌افزارهای تخصصی کتابخانه‌ای",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۶/۱۸",
    image: "/images/blog6.jpg",
  },
  {
    id: 7,
    title: "رده‌بندی کتابخانه کنگره",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۶/۱۲",
    image: "/images/blog7.jpg",
  },
  {
    id: 8,
    title: "رده‌بندی دیویی",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۶/۰۷",
    image: "/images/blog8.png",
  },
  {
    id: 9,
    title: "انواع رده‌بندی منابع کتابخانه‌ای",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۵/۳۰",
    image: "/images/blog9.jpg",
  },
  {
    id: 10,
    title: "اهمیت بازاریابی در کتابخانه‌ها",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۵/۲۵",
    image: "/images/blog10.jpg",
  },
  {
    id: 11,
    title: "سیستم مدیریت کتابخانه چیست؟",
    author: "مهوش تقی‌زاده",
    date: "۱۴۰۵/۰۵/۲۰",
    image: "/images/blog11.jpg",
  },
];

function BlogCard({ article }) {
  const { id, title, author, date, image } = article;

  return (
    
    <article className={styles.blogCard}>
      <Link
        to={`/blog/${id}`}
        className={styles.imageLink}
        aria-label={`مطالعه مقاله ${title}`}
      >
        <img
          className={styles.image}
          src={image}
          alt={title}
          loading="lazy"
        />
      </Link>

      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.meta}>
          <li>
            <FiUser aria-hidden="true" />
            <span>{author}</span>
          </li>

          <li>
            <FiCalendar aria-hidden="true" />
            <time>{date}</time>
          </li>
        </ul>

        <Link to={`/blog/${id}`} className={styles.readMore}>
          <span>بیشتر بخوانید</span>
          <FiArrowLeft aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function Blog() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <header className={styles.pageHeader}>
          <h1>وبلاگ کتابا</h1>
          <p>مطالبی درباره کتاب، کتابداری، دسته‌بندی منابع و دنیای مطالعه.</p>
        </header>

        <section className={styles.blogBox} aria-label="مقالات وبلاگ">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Blog;

