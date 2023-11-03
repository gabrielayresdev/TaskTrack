import { PropsWithChildren } from "react";
import styles from "./Form.module.sass";

interface IForm extends PropsWithChildren {
  callback?: VoidFunction;
  className?: string;
  style?: object;
}

export const Form = ({ children, className, ...args }: IForm) => {
  return (
    <form className={`${styles.form} ${className}`} {...args}>
      {children}
    </form>
  );
};

export default Form;
