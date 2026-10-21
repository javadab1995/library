import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";

import Footer from "../../components/fotter/Footer";
import articles from "../../data/articles";
import styles from "./BlogPost.module.css";
import Header from "../../components/header/Header";

export default function BlogPost() {
  const { id } = useParams();

  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <section className={styles.notFound}>
            <h1>مقاله پیدا نشد</h1>
            <p>مقاله موردنظر وجود ندارد یا شناسه آن معتبر نیست.</p>
            <Link to="/blog" className={styles.backLink}>
              <FiArrowRight aria-hidden="true" />
              بازگشت به وبلاگ
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <article className={styles.article}>
          <nav className={styles.breadcrumb} aria-label="مسیر صفحه">
              <Link to="/">صفحه اصلی</Link> 
            <span aria-hidden="true">/</span> 
            <Link to="/blog">وبلاگ</Link> 
            <span aria-hidden="true">/</span> 
            <span aria-current="page">{article.title}</span>
          </nav>
          
          <header className={styles.header}>
             
            <span className={styles.category}>{article.category}</span>  
             <h1>{article.title}</h1> 
            <p className={styles.excerpt}>{article.excerpt}</p> 
            <ul className={styles.meta}>
              
              <li>
                  <FiUser aria-hidden="true" />
                <span>{article.author}</span>
              </li>
              
              <li>
                 <FiCalendar aria-hidden="true" /> 
                <time>{article.date}</time>
              </li>
               
            </ul>
            
          </header>
          
          <figure className={styles.cover}>
              <img src={article.image} alt={article.title} /> 
            
          </figure>
          
          <div className={styles.content}>
             
            {article.content.map((section, index) => (
              <section
                className={styles.contentSection}
                key={`${article.id}-${index}`}
              >
                  <h2>{section.heading}</h2> 
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${article.id}-${index}-${paragraphIndex}`}>
                      {paragraph} 
                  </p>
                ))}
                
              </section>
            ))}
            
          </div>
        
          <footer className={styles.articleFooter}>
            
            <Link to="/blog" className={styles.backLink}>
               <FiArrowRight aria-hidden="true" />
              بازگشت به همه مقاله‌ها 
            </Link>
           
          </footer>
        </article>
      </main>

      <Footer />
    </>
  );
}
