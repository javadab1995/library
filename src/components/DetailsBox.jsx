import { NavLink, Outlet} from 'react-router-dom'
import styles from './DetailsBox.module.css';
import { useBooks } from "../context/BookContext.jsx";
import Spinner from './Spinner.jsx';

function DetailsBox() {
  const { selectedItem, isLoadig } = useBooks();
  if (isLoadig) return <Spinner />;
  if (!selectedItem) return;
  return (
    <div className={styles.details}>
      <ul className={styles.nav}>
        <li>
          <NavLink to="book">کتاب</NavLink>
        </li>
        <li>
          <NavLink to="writer">نویسنده</NavLink>
        </li>
      </ul>
     <Outlet />
   
    </div>
  );
}

export default DetailsBox
