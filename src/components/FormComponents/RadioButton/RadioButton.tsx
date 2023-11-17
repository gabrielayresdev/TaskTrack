import styles from "./RadioButton.module.sass";

interface IRadioButton extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  checked: boolean;
  handleClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  id?: string;
  label?: string;
  Icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const RadioButton = ({
  value = "",
  checked,
  handleClick,
  id,
  label,
  Icon,
  ...args
}: IRadioButton) => {
  return (
    <div className={styles.wrapper}>
      {Icon ? <Icon /> : null}
      <label htmlFor={id}>{label}</label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onClick={handleClick}
        id={id}
        {...args}
      />
    </div>
  );
};

export default RadioButton;
