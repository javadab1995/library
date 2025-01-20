import Logo from "./Logo"
import Search from "./Search"
import styles from "./AppNav.module.css"
import { NavLink } from "react-router-dom"
function AppNav({ searchQuery, setSearchQuery }) {
  return (
    <div className={styles.nav}>
      <Logo />
      <Search  searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul>
        <li className={styles.navLink}>
          <NavLink to="/blog">وبلاگ</NavLink>
        </li>

        <li className={styles.navLink}>
          <NavLink to="/aboutus">درباره ما</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav
