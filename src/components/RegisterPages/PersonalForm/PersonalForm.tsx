import { useRegisterContext } from "../../../contexts/RegisterContext";
import SvgLock from "../../../iconComponents/Icons/Lock";
import SvgPerson from "../../../iconComponents/Icons/Person";
import Button from "../../Shared/Button/Button";
import Form from "../../FormComponents/Form/Form";
import Input from "../../FormComponents/Input/Index";
import styles from "./PersonalForm.module.sass";
import AuthenticationToggle from "../../FormComponents/AuthenticationToggle/AuthenticationToggle";

export const PersonalForm = () => {
  const { formValues, GoNextPage, GoPreviousPage } = useRegisterContext();
  const { name, cellphone } = formValues;

  function handleClick() {
    if (name.validate() && cellphone.validate()) {
      GoNextPage();
    }
  }

  return (
    <>
      <Form>
        <Input.Input label="full name" id="name" error={name.error}>
          <SvgPerson />
          <Input.Field
            value={name.value}
            handleChange={name.onChange}
            onBlur={() => name.validate()}
            placeholder="type your name"
          />
        </Input.Input>
        <Input.Input label="cellphone" id="cellphone" error={cellphone.error}>
          <SvgLock />
          <Input.Field
            type={"tel"}
            value={cellphone.value}
            handleChange={cellphone.onChange}
            onBlur={() => cellphone.validate()}
            placeholder="type your cellphone"
          />
        </Input.Input>

        <Button text="Sign up" onClick={handleClick} />
        <button className={styles.return} onClick={GoPreviousPage}>
          return
        </button>
      </Form>
      <AuthenticationToggle
        line="Already have an account?"
        anchor="Login in your account"
        href="/login"
      />
    </>
  );
};

export default PersonalForm;
