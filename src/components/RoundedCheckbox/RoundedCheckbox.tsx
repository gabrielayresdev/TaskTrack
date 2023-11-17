import React from "react";
import styles from "./RoundedCheckbox.module.sass";

interface RoundedCheckboxInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RoundedCheckbox = ({
  checked,
  setChecked,
}: RoundedCheckboxInterface) => {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={checked}
      onClick={() => setChecked(!checked)}
    />
  );
};

export default RoundedCheckbox;
