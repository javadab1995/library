import { Link } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import styles from "./MyLibraryLink.module.css";

function MyLibraryLink() {
  return (
    <Link to="/my-library" className={styles.libraryButton}>
      <FiBookOpen aria-hidden="true" />
      <span>کتابخانه من</span>
    </Link>
  );
}

export default MyLibraryLink;
