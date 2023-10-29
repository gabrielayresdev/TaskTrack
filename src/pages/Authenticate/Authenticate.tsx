/* import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Authenticate.module.sass";
import logo from "/src/assets/Logo.png";
import Login from "../Login/Login";
import Register from "../../components/Register/Register";
import RegisterContextProvider from "../../contexts/RegisterContext";

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
        <RegisterContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </RegisterContextProvider>
      </BrowserRouter>
    </>
  );
};

export default Authenticate;
 */
