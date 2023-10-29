import { PropsWithChildren } from "react";
import styles from "./Form.module.sass";

interface IForm extends PropsWithChildren {
  callback?: VoidFunction;
}

export const Form = ({ children }: IForm) => {
  return <div className={styles.form}>{children}</div>;
};

export default Form;
