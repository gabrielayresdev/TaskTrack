import styles from "./Home.module.sass";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Header from "../../components/Header/Header";
import CreateTaskButton from "../../components/CreateTaskButton/CreateTaskButton";
import Modal from "../../components/Shared/Modal/Modal";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
import { useModalContext } from "../../contexts/ModalContext";

export const Home = () => {
  const auth = useAuthContext();
  const { user } = auth;
  const { showModal, setShowModal } = useModalContext();

  if (user)
    return (
      <div className={styles.home}>
        <Header />
        <TaskList />
        <CreateTaskButton onClick={() => setShowModal(true)} />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <TaskForm />
        </Modal>
      </div>
    );
  else return null;
};

export default Home;
