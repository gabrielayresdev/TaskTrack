import styles from "./TaskFormHeader.module.sass";
import { useNotificationContext } from "../../../contexts/NotificationContext";
import { deleteTask } from "../../../api";
import { ReactComponent as Check } from "/src/assets/Icons/Check.svg";
import { useTaskContext } from "../../../contexts/TasksContext";
import { useModalContext } from "../../../contexts/ModalContext";
import { ReactComponent as Xmark } from "/src/assets/Icons/XMark.svg";
import { ReactComponent as Minus } from "/src/assets/Icons/SquareMinus.svg";
import { User } from "../../../types/User";
import { TaskInterface } from "../../../types/Task";

interface TaskFormHeaderInterface {
  user: User;
  signout: VoidFunction;
  task: TaskInterface;
}

export const TaskFormHeader = ({
  user,
  signout,
  task,
}: TaskFormHeaderInterface) => {
  const { createNotification } = useNotificationContext();
  const { recoverTasks } = useTaskContext();
  const { setShowModal } = useModalContext();

  async function removeTask(id: string) {
    const token = localStorage.getItem("token");
    if (!token) {
      signout();
      createNotification({ type: "Alert", message: "Your session expired" });
      return;
    }

    const { url, options } = deleteTask(token, id);

    const response = await fetch(url, options);

    if (!response.ok)
      createNotification({
        type: "Alert",
        message: "It was not possible to delete your task!",
      });
    else
      createNotification({
        type: "Success",
        message: "Task deleted successfully",
      });
  }

  return (
    <div className={styles.header}>
      <p>{`${user?.name} > ${task.taskGroup}`}</p>
      <div className={styles.menu}>
        <div className={styles.icon}>
          <Check />
        </div>
        {task.id ? (
          <div
            className={styles.icon}
            onClick={async () => {
              await removeTask(task.id);
              recoverTasks();
              setShowModal(false);
            }}
          >
            <Minus />
          </div>
        ) : null}
        <div className={styles.icon} onClick={() => setShowModal(false)}>
          <Xmark />
        </div>
      </div>
    </div>
  );
};

export default TaskFormHeader;
