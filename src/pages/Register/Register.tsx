import React from "react";
import styles from "./Register.module.sass";
import { useRegisterContext } from "../../contexts/RegisterContext";
import AuthForm from "../../components/RegisterPages/AuthForm/AuthForm";
import PersonalForm from "../../components/RegisterPages/PersonalForm/PersonalForm";
import GroupsForm from "../../components/RegisterPages/GroupsForm/GroupsForm";
import AuthHeader from "../../components/Shared/AuthHeader/AuthHeader";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const context = useRegisterContext();
  const page = context.page;
  const auth = useAuthContext();
  const navigate = useNavigate();

  const pagesRef = [<AuthForm />, <PersonalForm />, <GroupsForm />];

  React.useEffect(() => {
    if (auth.user) {
      navigate("/home");
    }
  }, [auth.user, navigate]);

  return (
    <div className={styles.wrapper}>
      <AuthHeader />
      <div className={styles.content}>{pagesRef[page]}</div>
    </div>
  );
};

export default Register;
