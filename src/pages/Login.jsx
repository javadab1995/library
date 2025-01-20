import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handleLogin = (e) => {
     e.preventDefault();

     
     if (email && password) {
       localStorage.setItem("user", JSON.stringify({ email }));
       navigate("/app");
     } else {
       alert("لطفاً ایمیل و رمز عبور خود را وارد کنید");
     }
  };
  const clearInputs = () => {
    setEmail(""); 
    setPassword(""); 
  };


  return (
    <main className={styles.login}>
      <PageNav onLogout={clearInputs} />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email"> ایمیل</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">رمز</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button className="btn" onClick={handleLogin}>ورود</button>
        </div>
      </form>

      <Footer  />
    </main>
  );
}
