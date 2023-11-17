import React from "react";
import styles from "./Task.module.sass";
import { TaskInterface } from "../../types/Task";
import RoundedCheckbox from "../RoundedCheckbox/RoundedCheckbox";
import GroupOption from "../GroupOption/GroupOption";

export const Task = ({ task }: { task: TaskInterface }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <RoundedCheckbox checked={checked} setChecked={setChecked} />
        <div className={styles.data}>
          <h3 className={styles.title}>{task.title}</h3>
          <div className={styles.secondaryData}>
            <p>{task.endAt}</p>
            <GroupOption group={task.taskGroup} />
          </div>
        </div>
      </div>
      <span className={`${styles.detail} ${styles[task.priority]}`}></span>
    </div>
  );
};

export default Task;
