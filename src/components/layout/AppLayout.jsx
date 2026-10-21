import { useState } from "react";

import AppBox from "../layout/AppBox";
import AppNav from "../header/AppNav";
import Footer from "../fotter/Footer";

import styles from "./AppLayout.module.css";

function AppLayout() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <main className={styles.main}>
        <AppNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <AppBox searchQuery={searchQuery} />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
