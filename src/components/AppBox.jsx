
import styles from './AppBox.module.css'
import DetailsBox from './DetailsBox'
import ListBox from './ListBox'

function AppBox({searchQuery}) {
  return (
    <div className={styles.box}>
      <ListBox
         searchQuery={searchQuery}
      />
      <DetailsBox  />
    </div>
  );
}

export default AppBox
