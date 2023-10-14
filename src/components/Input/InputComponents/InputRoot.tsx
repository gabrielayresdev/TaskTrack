import styles from "./InputRoot.module.sass";
import { PropsWithChildren } from "react";

interface IInput extends PropsWithChildren {
  className?: string;
  label: string;
  id: string;
}

export const InputRoot = ({ className, label, id, children }: IInput) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.input}>{children}</div>
    </div>
  );
};

export default InputRoot;
