import React from "react";
import styles from "./Home.module.sass";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { userData } = useUserContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!userData?.email.length) navigate("/login");
  });

  if (userData?.email.length && userData.email.length > 0) {
    return (
      <div className={styles.wrapper}>
        Nome: {userData.name}
        Email: {userData.email}
      </div>
    );
  } else {
    return null;
  }
};

export default Home;
