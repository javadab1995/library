import { NavLink, Link } from "react-router-dom";
import Logo from "../widgets/Logo";
import styles from "./Header.module.css";
import MyLibraryLink from "../buttons/MyLibraryLink";
import { FiBookOpen, FiHome, FiInfo } from "react-icons/fi";



const links = [
  
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

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand} aria-label="کتابا، صفحه اصلی">
        <Logo />
      </Link>

      <nav className={styles.navigation} aria-label="ناوبری اصلی">
        
                    {links.map(({ to, label, icon: Icon, end }) => (
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
    </header>
  );
}

export default Header;
