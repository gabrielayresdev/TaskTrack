import styles from "./Register.module.sass";
import { useRegisterContext } from "../../contexts/RegisterContext";
import AuthForm from "./FormPages/AuthForm/AuthForm";
import PersonalForm from "./FormPages/PersonalForm/PersonalForm";
import GroupsForm from "./FormPages/GroupsForm/GroupsForm";

export const Register = () => {
  const context = useRegisterContext();
  const page = context.page;

  const pagesRef = [<AuthForm />, <PersonalForm />, <GroupsForm />];

  return (
    <div className={styles.wrapper}>
      <div>{pagesRef[page]}</div>
    </div>
  );
};

export default Register;
