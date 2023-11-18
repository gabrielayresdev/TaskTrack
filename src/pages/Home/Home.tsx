import React from "react";
import styles from "./Home.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Header from "../../components/Header/Header";
import CreateTaskButton from "../../components/CreateTaskButton/CreateTaskButton";
import Modal from "../../components/Modal/Modal";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";

import { TaskInterface } from "../../types/Task";
import { createTask } from "../../api";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { useModalContext } from "../../contexts/ModalContext";

export const Home = () => {
  const auth = useAuthContext();
  const { user } = auth;
  const { showModal, setShowModal } = useModalContext();
  const { createNotification } = useNotificationContext();

  async function createNewTask(task: TaskInterface) {
    const token = localStorage.getItem("token");
    if (!token) {
      auth.signout();
      createNotification({ type: "Alert", message: "Your session expired" });
      return;
    }

    const { title, description, endAt, taskGroup, priority } = task;

    const { url, options } = createTask(
      token,
      description,
      title,
      endAt,
      priority,
      taskGroup
    );
    const response = await fetch(url, options);

    if (!response.ok) {
      const json = await response.json();
      createNotification({ type: "Alert", message: json });
    }
  }

  if (user)
    return (
      <div className={styles.home}>
        <Header />
        <TaskList />
        <CreateTaskButton onClick={() => setShowModal(true)} />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <TaskForm request={createNewTask} />
        </Modal>
      </div>
    );
  else return null;
};

export default Home;
