import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from './Blog.module.css';

  const generateRandomDate = function () {
    const start = new Date(2020, 0, 1);
    const end = new Date();
  
    const date = new Date(start.getTime() + Math.random() * (end - start));
    return date.toLocaleDateString();
  };  

function Blog() {
  const [dates, setDates] = useState([]);
 

  useEffect(() => {
    const date = Array.from({ length: 10 }, () => generateRandomDate());
    setDates(date)
    
 }, [])
 
  
  return (
    <>
      <PageNav />

      <main className={styles.main}>
        <div className={styles.blogBox}>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog1.png" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>سواد اطلاعاتی</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[0]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog2.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>شابک به چه معناست؟</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>هادی عبادی</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[1]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog3.png" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>فیپا یا فهرست نویسی پیش از انتشار</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[2]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog4.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>آموزش کتابداری</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[3]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog5.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>مجموعه سازی در کتابخانه</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[4]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog6.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3> نرم افزارهای کتابخانه ای تخصصی</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[5]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog7.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>رده بندی کتابخانه کنگره</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[6]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog8.png" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3> رده بندی دیویی</h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[2]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog9.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>انواع رده بندی منابع کتابخانه ای </h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[9]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog10.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>اهمیت بازاریابی در کتابخانه ها </h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[0]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className={styles.blogCart}>
            <div>
              <img src="./blog11.jpg" alt="blog" />
            </div>

            <div className={styles.info}>
              <h3>سیستم مدیریت کتابخانه چیست؟ </h3>
              <ul>
                <li>
                  <i className={styles.faUser}></i>
                  <span>مهوش تقی زاده</span>
                </li>
                <li>
                  <i className={styles.faCalendar}></i>
                  <span>{dates[5]}</span>
                </li>
              </ul>
              <button>
                <span>بیشتر بخوانید</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
