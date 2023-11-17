import React from "react";
import styles from "./Home.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Header from "../../components/Header/Header";
import CreateTaskButton from "../../components/CreateTaskButton/CreateTaskButton";
import Modal from "../../components/Modal/Modal";
import TaskForm from "../../components/TaskForm/TaskForm";
import useFetch from "../../hooks/useFetch";
import { listTask } from "../../api";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { TaskInterface } from "../../types/Task";
import Task from "../../components/Task/Task";

export const Home = () => {
  const auth = useAuthContext();
  const { user } = auth;
  const [showModal, setShowModal] = React.useState(false);
  const { createNotification } = useNotificationContext();

  function recoverToken() {
    const aux = localStorage.getItem("token");
    if (aux) {
      return aux;
    } else {
      createNotification({ type: "Alert", message: "Your session expired" });
      auth.signout();
      return "";
    }
  }

  const token = React.useRef<string>(recoverToken());

  const { url, options } = listTask(token.current);

  const { data } = useFetch<TaskInterface[]>(url, options);

  if (user)
    return (
      <div className={styles.home}>
        <Header />

        <div className={styles.tasks}>
          {data ? data.map((task) => <Task task={task} />) : null}
        </div>

        <CreateTaskButton onClick={() => setShowModal(true)} />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <TaskForm />
        </Modal>
      </div>
    );
  else return null;
};

export default Home;
