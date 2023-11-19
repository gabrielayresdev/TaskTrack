import React from "react";
import styles from "./TaskForm.module.sass";
import { ReactComponent as Plus } from "/src/assets/Icons/Plus.svg";
import dayjs from "dayjs";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import { TaskInterface } from "../../types/Task";
import { useTaskContext } from "../../contexts/TasksContext";
import { useModalContext } from "../../contexts/ModalContext";
import TaskPickers from "../TaskPickers/TaskFormPickers";
import TaskFormHeader from "../TaskFormHeader/TaskFormHeader";

interface TaskFormInterface {
  request: (task: TaskInterface) => void;
}

export const TaskForm = ({ request }: TaskFormInterface) => {
  // Task and User
  const auth = useAuthContext();
  const { user } = auth;
  const { currentTask, setCurrentTask } = useTaskContext();
  const [task, setTask] = React.useState<TaskInterface>(() => {
    if (currentTask) return currentTask;
    return {
      id: "",
      title: "New Task",
      description: "",
      endAt: dayjs().toJSON(),
      taskGroup: user?.groups[0] ? user.groups[0] : "personal",
      priority: "low",
      checked: false,
    };
  });
  const { title, description } = task;

  const { recoverTasks } = useTaskContext();
  const { setShowModal } = useModalContext();

  async function saveTask() {
    if (!title) setTask({ ...task, title: "New Task" });
    await request(task);
    recoverTasks();
    setShowModal(false);
  }

  React.useEffect(() => {
    return () => {
      setCurrentTask(null);
    };
  }, [setCurrentTask]);

  return (
    <div className={styles.form}>
      <TaskFormHeader user={user!} signout={auth.signout} task={task} />

      <input
        type="text"
        value={title}
        onChange={({ target }) => setTask({ ...task, title: target.value })}
        className={styles.title}
      />

      <TaskPickers task={task} setTask={setTask} />

      <div className={styles.description}>
        <Plus className={styles.plus} />
        <textarea
          name="description"
          id="description"
          className={styles.textarea}
          placeholder="Describe your task"
          value={description}
          onChange={({ target }) =>
            setTask({ ...task, description: target.value })
          }
        ></textarea>
      </div>
      <button className={styles.saveTask} onClick={saveTask}>
        {task.id ? "Update" : "Create"}
      </button>
    </div>
  );
};

export default TaskForm;
