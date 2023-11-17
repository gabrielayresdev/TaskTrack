import React from "react";
import styles from "./Task.module.sass";
import { TaskInterface } from "../../types/Task";
import RoundedCheckbox from "../RoundedCheckbox/RoundedCheckbox";

export const Task = ({ task }: { task: TaskInterface }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <RoundedCheckbox checked={checked} setChecked={setChecked} />
      </div>
      <span className={`${styles.detail} ${task.priority}`}></span>
    </div>
  );
};

export default Task;
