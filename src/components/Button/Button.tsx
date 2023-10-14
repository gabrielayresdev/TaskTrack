import styles from "./Button.module.sass";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => true;
  styles?: string;
}

export const Button = ({ text, onClick, ...args }: IButton) => {
  return (
    <button
      className={`${styles.button} ${styles}`}
      onClick={onClick}
      {...args}
    >
      {text}
    </button>
  );
};

export default Button;
