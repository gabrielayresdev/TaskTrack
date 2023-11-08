import styles from "./Home.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Header from "../../components/Header/Header";

export const Home = () => {
  const auth = useAuthContext();
  const { user } = auth;

  if (user)
    return (
      <div className={styles.wrapper}>
        <Header />
      </div>
    );
  else return null;
};

export default Home;
