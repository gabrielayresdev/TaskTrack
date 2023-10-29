import styles from "./Register.module.sass";
import { useRegisterContext } from "../../contexts/RegisterContext";
import AuthForm from "../../components/RegisterPages/AuthForm/AuthForm";
import PersonalForm from "../../components/RegisterPages/PersonalForm/PersonalForm";
import GroupsForm from "../../components/RegisterPages/GroupsForm/GroupsForm";
import AuthHeader from "../../components/Shared/AuthHeader/AuthHeader";

export const Register = () => {
  const context = useRegisterContext();
  const page = context.page;

  const pagesRef = [<AuthForm />, <PersonalForm />, <GroupsForm />];

  return (
    <div className={styles.wrapper}>
      <AuthHeader />
      <div className={styles.content}>{pagesRef[page]}</div>
    </div>
  );
};

export default Register;
