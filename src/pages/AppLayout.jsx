import styles from './AppLayout.module.css'
import { useState } from "react";
import AppBox from "../components/AppBox"
import AppNav from "../components/AppNav"
import Footer from "../components/Footer"
function AppLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <main className={styles.main}>
        <AppNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <AppBox
          // books={books}
          // isLoding={isLoding}
          // onSelectedItem={onSelectedItem}
          // selectedItem={selectedItem}

          searchQuery={searchQuery}
        />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout
