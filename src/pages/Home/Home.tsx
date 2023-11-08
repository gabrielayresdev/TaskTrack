import styles from "./Home.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";

export const Home = () => {
  const auth = useAuthContext();
  const { user } = auth;

  if (user)
    return (
      <div className={styles.wrapper}>
        Nome: {user.name}
        Email: {user.email}
      </div>
    );
  else return null;
};

export default Home;
