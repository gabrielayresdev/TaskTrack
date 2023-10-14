import React from "react";
import styles from "./InputComponent.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputComponent = ({ type, value, setValue, ...args }: IInput) => {
  return (
    <input
      className={styles.input}
      type={type}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...args}
    />
  );
};

export default InputComponent;
