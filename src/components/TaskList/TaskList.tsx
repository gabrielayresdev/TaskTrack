import React from "react";
import styles from "./TaskList.module.sass";
import { useTaskContext } from "../../contexts/TasksContext";
import Task from "../Task/Task";

export const TaskList = () => {
  const { tasks, recoverTasks } = useTaskContext();

  React.useEffect(() => {
    recoverTasks();
  });

  return (
    <div className={styles.tasks}>
      {tasks ? tasks.map((task) => <Task task={task} />) : null}
    </div>
  );
};

export default TaskList;
