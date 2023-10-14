import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Authenticate.module.sass";
import logo from "/src/assets/Logo.png";
import Login from "../../components/Login/Login";

export const Authenticate = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo from TaskTrack" />
        </div>
        <h1 className={styles.company_name}>
          <span>Task</span>Track
        </h1>
        <div className={styles.steps}></div>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Authenticate;
