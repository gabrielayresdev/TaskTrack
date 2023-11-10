import styles from "./Home.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Header from "../../components/Header/Header";
import CreateTaskButton from "../../components/CreateTaskButton/CreateTaskButton";

export const Home = () => {
  const auth = useAuthContext();
  const { user } = auth;

  if (user)
    return (
      <div className={styles.home}>
        <Header />
        <CreateTaskButton />
      </div>
    );
  else return null;
};

export default Home;
