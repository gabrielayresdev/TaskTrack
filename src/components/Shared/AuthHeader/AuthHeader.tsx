//import React from "react";
import styles from "./AuthHeader.module.sass";
import logo from "/src/assets/Logo.png";

export const AuthHeader = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo from TaskTrack" />
        </div>
        <h1 className={styles.company_name}>
          <span>Task</span>Track
        </h1>
        <div className={styles.steps}></div>
      </header>
    </div>
  );
};

export default AuthHeader;
