import React from "react";
import styles from "./PriorityOption.module.sass";
import { ReactComponent as Check } from "/src/assets/Icons/Checked.svg";

interface PriorityOptionInterface {
  priority: "high" | "medium" | "low";
}

export const PriorityOption = ({ priority }: PriorityOptionInterface) => {
  return (
    <div className={`${styles.option} ${styles[priority]}`}>
      <span className={styles.icon}>
        <Check />
      </span>
      {priority}
    </div>
  );
};

export default PriorityOption;
