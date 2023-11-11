import React from "react";
import styles from "./TaskForm.module.sass";
import { ReactComponent as Check } from "/src/assets/Icons/Check.svg";
import { ReactComponent as Minus } from "/src/assets/Icons/SquareMinus.svg";
import { ReactComponent as Xmark } from "/src/assets/Icons/XMark.svg";
import { ReactComponent as Plus } from "/src/assets/Icons/Plus.svg";

export const TaskForm = () => {
  const [title, setTitle] = React.useState<string>("New Task");
  const [description, setDescription] = React.useState<string>("");
  const [group, setGroup] = React.useState<string>("Personal");
  const [priority, setPriority] = React.useState<string>("Low");

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <p>{"Gabriel Ayres > Personal"}</p>
        <div className={styles.menu}>
          <div className={styles.icon}>
            <Check />
          </div>
          <div className={styles.icon}>
            <Minus />
          </div>
          <div className={styles.icon}>
            <Xmark />
          </div>
        </div>
      </div>

      <input
        type="text"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        className={styles.title}
      />

      <div className={styles.popups}>
        <span>Date</span>
        <span>{group}</span>
        <span>{priority}</span>
      </div>
      <div className={styles.description}>
        <Plus className={styles.plus} />
        <textarea
          name="description"
          id="description"
          className={styles.textarea}
          placeholder="Describe your task"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        ></textarea>
      </div>
      <button className={styles.saveTask}>Create</button>
    </div>
  );
};

export default TaskForm;
