import { NavLink } from "react-router-dom";
import { FiBookOpen, FiHome, FiInfo } from "react-icons/fi";

import Logo from "../widgets/Logo";
import Search from "../widgets/Search";
import styles from "./AppNav.module.css";
import MyLibraryLink from "../buttons/MyLibraryLink";

const navigationLinks = [
  {
    to: "/app",
    label: "کتابخانه",
    icon: FiHome,
    end: true,
  },
  {
    to: "/blog",
    label: "وبلاگ",
    icon: FiBookOpen,
  },
  {
    to: "/aboutus",
    label: "درباره ما",
    icon: FiInfo,
  },
];

function AppNav({ searchQuery, setSearchQuery }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <Logo />
          </div>

          <nav className={styles.navigation} aria-label="ناوبری اصلی">
            {navigationLinks.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className={styles.libraryAction}>
            <MyLibraryLink />
          </div>
        </div>

        <div className={styles.searchArea}>
          <div className={styles.searchHeading}>
            <span className={styles.searchTitle}>دنبال چه کتابی می‌گردی؟</span>
            <span className={styles.searchDescription}>
              عنوان کتاب یا نام نویسنده را جست‌وجو کن.
            </span>
          </div>

          <div className={styles.search}>
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppNav;
