import styles from "./Input.module.sass";
import React from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({
  label,
  value,
  setValue,
  placeholder,
  id,
  type = "text",
  ...args
}: IInput) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.input}>
        <input
          type={type}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          placeholder={placeholder}
          {...args}
        />
      </div>
    </div>
  );
};

export default Input;
