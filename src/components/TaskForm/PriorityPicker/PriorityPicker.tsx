import styles from "./PriorityPicker.module.sass";
import PriorityOption from "../../PriorityOption/PriorityOption";

interface PriorityPickerInterface {
  setPriority: (priority: "high" | "medium" | "low") => void;
}

export const PriorityPicker = ({ setPriority }: PriorityPickerInterface) => {
  return (
    <div className={styles.priorityPicker}>
      <div className={styles.option} onClick={() => setPriority("high")}>
        <PriorityOption priority="high" />
      </div>
      <div className={styles.option} onClick={() => setPriority("medium")}>
        <PriorityOption priority="medium" />
      </div>
      <div className={styles.option} onClick={() => setPriority("low")}>
        <PriorityOption priority="low" />
      </div>
    </div>
  );
};

export default PriorityPicker;
