import React from "react";
import styles from "./CreateTaskButton.module.sass";
import SvgPenToSquare from "../../assets/Icons/PenToSquare.svg";

export const CreateTaskButton = () => {
  return (
    <button className={styles.createTaskButton}>
      <img src={SvgPenToSquare} alt="Create task" className={styles.icon} />
    </button>
  );
};

export default CreateTaskButton;
