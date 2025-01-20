import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./AboutUs.module.css"
   

function AboutUs() {
    return (
      <main className={styles.main}>
        <PageNav />
        <section className={styles.section}>
          <div className={styles.summary}>
            <p>
              همراه علم یک شرکت دانش بنیان در حوزه فناوری مطالعه و یادگیری
              الکترونیکی است. این مجموعه برای دانشجویان، اساتید دانشگاه ، مدیران
              و متخصصان شرایطی را فراهم کرده که با استفاده از روش‌هایی جذاب و
              سازگار با محیط بومی به نتایج بهتر علمی و تحقیقاتی دست یابند. با
              بهره‌گیری از بهترین فناوری‌ها، محتوای پژوهش‌ محور و اثبات‌ شده
              دانشگاه‌های بزرگ کشور را به شیوه‌ای ارائه کرده ایم تا علاقمندان به
              بهترین نحو ممکن از آن‌ها استفاده کرده و بهترین نتایج را کسب کنند.
            </p>
          </div>
          <div >
            <img src="./ebook_book.png" alt="bookmark" />
          </div>
        </section>

        <section className={`${styles.section} ${styles.secound}`}>
          <div className={styles.summary}>
            <p>
              در حال حاضر هدف ما جذب دانشجویانی هستند که ترجیح می دهند -یا نیاز
              دارند- که کتاب های خود را به صورت الکترونیکی مطالعه کنند. و
              همینطور جذب ناشرانی که به هر دلیل تمایل دارند کتاب های خود را به
              صورت الکترونیکی نیز منتشر کنند. برای لذت بردن بیشتر دانشجویان و
              حفاظ امنیت بیشتر ناشران، ما در هر بخش تلاش می کنیم تا تکنولوژی های
              پیشرفته تر را ارائه دهیم. .امیدواریم با فراهم کردن اطلاعات مفید و
              کافی، بازارها و جوامع، بتوانند توانایی های بالقوه‌ خود را آشکار
              کرده و در راه رشد و پیشرفت کشور عزیزمان، ایران گام برداریم.بهترین
              نحو ممکن از آن‌ها استفاده کرده و بهترین نتایج را کسب کنند.
            </p>
          </div>
          <div className={styles.imgHolder}>
            <img src="./pic3.png" alt="bookmark" />
          </div>
        </section>

        <section className={`${styles.section} ${styles.last}`}>
          <div className={styles.summary}>
            <p>
              در حال حاضر هدف ما جذب دانشجویانی هستند که ترجیح می دهند -یا نیاز
              دارند- که کتاب های خود را به صورت الکترونیکی مطالعه کنند. و
              همینطور جذب ناشرانی که به هر دلیل تمایل دارند کتاب های خود را به
              صورت الکترونیکی نیز منتشر کنند. برای لذت بردن بیشتر دانشجویان و
              حفاظ امنیت بیشتر ناشران، ما در هر بخش تلاش می کنیم تا تکنولوژی های
              پیشرفته تر را ارائه دهیم. .امیدواریم با فراهم کردن اطلاعات مفید و
              کافی، بازارها و جوامع، بتوانند توانایی های بالقوه‌ خود را آشکار
              کرده و در راه رشد و پیشرفت کشور عزیزمان، ایران گام برداریم.
            </p>
          </div>
          <div >
            <img src="./saze.png" alt="bookmark" />
          </div>
        </section>
        <hr />
        <section>
          <div className={styles.shape}>
            <img className={styles.cercle} src="cercle-shape.png" alt="" />
            <img className={styles.mainPng} src="main.png" alt="main" />
          </div>
        </section>
        <Footer />
      </main>
    );
}

export default AboutUs
