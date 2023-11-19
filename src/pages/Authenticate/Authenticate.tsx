import Wave from "../../components/Shared/Wave/Wave";
import styles from "./Authenticate.module.sass";

export const Authenticate = ({ Form }: { Form: () => React.JSX.Element }) => {
  return (
    <div className={styles.authorization}>
      <div className={styles.welcome}>
        <h2 className={styles.title}>
          Welcome to <span>Task</span>Track
        </h2>
        <p className={styles.paragraph}>
          Stay organized, boost productivity, and seize control of your day with
          our intuitive to-do list platform
        </p>
      </div>
      <div className={styles.authenticationForms}>
        <Form />
      </div>
      <Wave className={styles.wave} />
    </div>
  );
};

export default Authenticate;
