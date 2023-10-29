import React from "react";
import styles from "./InputComponent.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value: string;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({ type, value, handleChange, ...args }: IInput) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={handleChange}
      {...args}
    />
  );
};

export default InputComponent;
