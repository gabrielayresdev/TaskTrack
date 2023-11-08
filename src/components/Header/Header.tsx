import React from "react";
import styles from "./Header.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";

export const Header = () => {
  const auth = useAuthContext();

  return (
    <div className={styles.header}>
      <h1 className={styles.welcome}>
        Hello, <span>{auth.user?.name}</span>
      </h1>
      <button className={styles.leaveButton} onClick={() => auth.signout()}>
        sair
      </button>
    </div>
  );
};

export default Header;
