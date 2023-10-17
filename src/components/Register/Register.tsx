import React from "react";

import styles from "./Register.module.sass";

import RegisterContextProvider from "../../contexts/RegisterContext";
import AuthForm from "./FormPages/AuthForm/AuthForm";

export const Register = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterContextProvider>
        <AuthForm />
      </RegisterContextProvider>
    </div>
  );
};

export default Register;
