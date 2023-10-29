import styles from "./Button.module.sass";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  styles?: string;
}

export const Button = ({ text, ...args }: IButton) => {
  return (
    <button className={`${styles.button} ${styles}`} {...args}>
      {text}
    </button>
  );
};

export default Button;
