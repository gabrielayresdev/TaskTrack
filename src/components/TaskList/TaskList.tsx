import React from "react";
import styles from "./TaskList.module.sass";
import { useTaskContext } from "../../contexts/TasksContext";
import Task from "../Task/Task";
import { useModalContext } from "../../contexts/ModalContext";

export const TaskList = () => {
  const { tasks, recoverTasks, setCurrentTask } = useTaskContext();
  const recoverTasksRef = React.useRef(recoverTasks);
  const { setShowModal } = useModalContext();

  React.useEffect(() => {
    recoverTasksRef.current();
  }, []);

  return (
    <div className={styles.tasks}>
      {tasks
        ? tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => {
                setShowModal(true);
                setCurrentTask(task);
              }}
            >
              <Task task={task} />
            </div>
          ))
        : null}
    </div>
  );
};

export default TaskList;
