import { PropsWithChildren } from "react";
import styles from "./Form.module.sass";

interface IForm extends PropsWithChildren {
  callback?: VoidFunction;
  className?: string;
}

export const Form = ({ children, className }: IForm) => {
  return (
    <div className={className ? className : `${styles.form}`}>{children}</div>
  );
};

export default Form;
