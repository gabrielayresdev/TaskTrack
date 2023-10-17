import React from "react";

import styles from "./Register.module.sass";

import RegisterContextProvider, {
  useRegisterContext,
} from "../../contexts/RegisterContext";
import AuthForm from "./FormPages/AuthForm/AuthForm";
import PersonalForm from "./FormPages/PersonalForm/PersonalForm";

export const Register = () => {
  const context = useRegisterContext();
  const page = context.page;

  const pagesRef = [<AuthForm />, <PersonalForm />];

  return (
    <div className={styles.wrapper}>
      <div>{pagesRef[page]}</div>
    </div>
  );
};

export default Register;
