
import { Link } from "react-router-dom";
import PageNave from "../components/PageNav"
import styles from "./HomePage.module.css"

function HomPage() {
  return (
  
      <main className={styles.main}>
        <PageNave />
        <section className={styles.section}>
          <h1>
            کتابخانه آنلاین
            <br />
            کتاب هایی که باید بخوانید
          </h1>
          <p>
            در کتابا ما این امکان را به شما می دهیم که با بهترین نوشته های
            نویسندگان بزرگ آشنا شوید و آن ها را بخوانید و از همه مهمتر به این پی
            ببرید اصلا چرا باید کتاب بخوانیم یک دنیا شگفتی در انتظار توست.
          </p>

          <Link to="/app" className="cta">
            کتابخانه
          </Link>
        </section>
      </main>
  
  );
}

export default HomPage
