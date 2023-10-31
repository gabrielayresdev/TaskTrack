import styles from "./Checkbox.module.sass";

interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox = ({ checked, setChecked }: ICheckbox) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id="visible"
        name="visible"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
    </div>
  );
};
export default Checkbox;
