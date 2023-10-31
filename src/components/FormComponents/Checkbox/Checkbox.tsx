import styles from "./Checkbox.module.sass";

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  id: string;
  name?: string;
}

export const Checkbox = ({
  checked,
  setChecked,
  label,
  id,
  name,
}: ICheckbox) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        name={name ? name : id}
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default Checkbox;
