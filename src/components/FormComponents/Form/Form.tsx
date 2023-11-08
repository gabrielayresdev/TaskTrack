import { PropsWithChildren } from "react";
import styles from "./Form.module.sass";
import { FormProps } from "react-router-dom";

interface IForm extends FormProps {
  callback?: VoidFunction;
  className?: string;
  style?: object;
  children: React.ReactNode;
}

export const Form = ({ children, className, ...args }: IForm) => {
  return (
    <form className={`${styles.form} ${className}`} {...args}>
      {children}
    </form>
  );
};

export default Form;
