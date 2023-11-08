import { HTMLProps } from "react";
import styles from "./Form.module.sass";

interface IForm extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export const Form = ({ children, className, ...args }: IForm) => {
  return (
    <div className={`${styles.form} ${className}`} {...args}>
      {children}
    </div>
  );
};

export default Form;
