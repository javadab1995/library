import { Link, NavLink, useNavigate } from "react-router-dom"
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useEffect, useState } from "react";
function PageNave() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };


  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li className={styles.navLink}>
          <NavLink to="/blog">وبلاگ</NavLink>
        </li>

        <li className={styles.navLink}>
          <NavLink to="/aboutus">درباره ما</NavLink>
        </li>

        <li className={styles.btn}>
          {isLoggedIn ? (
            <>
              <Link className="btn" onClick={handleLogout}>
                خروج
              </Link>
            </>
          ) : (
            <Link className="btn" to="/login">
              ورود
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PageNave
