import styles from "./InputRoot.module.sass";
import { PropsWithChildren } from "react";

interface IInput extends PropsWithChildren {
  className?: string;
  label: string;
  id: string;
  error?: string | null;
}

export const InputRoot = ({
  className,
  label,
  id,
  error,
  children,
}: IInput) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.input}>{children}</div>
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default InputRoot;
