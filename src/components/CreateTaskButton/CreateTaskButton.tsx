import React from "react";
import styles from "./CreateTaskButton.module.sass";
import SvgPenToSquare from "../../assets/Icons/PenToSquare.svg";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export const CreateTaskButton = ({ onClick, ...args }: ButtonInterface) => {
  return (
    <button onClick={onClick} className={styles.createTaskButton} {...args}>
      <img src={SvgPenToSquare} alt="Create task" className={styles.icon} />
    </button>
  );
};

export default CreateTaskButton;
