
import styles from "./Search.module.css";
function Search({ searchQuery, setSearchQuery }) {

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="جستجو... "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
