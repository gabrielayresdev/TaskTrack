import React from "react";
import styles from "./PriorityPicker.module.sass";
import PriorityOption from "../../PriorityOption/PriorityOption";

interface PriorityPickerInterface {
  setPriority: (priority: "high" | "medium" | "low") => void;
}

export const PriorityPicker = ({ setPriority }: PriorityPickerInterface) => {
  return (
    <div className={styles.priorityPicker}>
      <div onClick={() => setPriority("high")}>
        <PriorityOption priority="high" />
      </div>
      <div onClick={() => setPriority("medium")}>
        <PriorityOption priority="medium" />
      </div>
      <div onClick={() => setPriority("low")}>
        <PriorityOption priority="low" />
      </div>
    </div>
  );
};

export default PriorityPicker;
