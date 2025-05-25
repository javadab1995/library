
import { useState } from 'react';
import styles from './AppBox.module.css'
import DetailsBox from './DetailsBox'
import ListBox from './ListBox'

function AppBox({ searchQuery }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  function handleClickRigh() {
    setCurrentIndex(currentIndex + 1)

  }
  function handleClickLeft() {
    setCurrentIndex(currentIndex - 1)

  }
  return (
    <div className={styles.box}>
      <ListBox searchQuery={searchQuery} />
      <div className={styles.arrows}>
        <button onClick={handleClickRigh} className={styles.arrow}>➡</button>
        <button onClick={handleClickLeft} className={styles.arrow}>⬅</button>
      </div>
      <DetailsBox />
    </div>
  );
}

export default AppBox
