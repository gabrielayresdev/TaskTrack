import React from "react";
import styles from "./AuthForm.module.sass";
import Form from "../../../Form/Form";
import Input from "../../../Input/Index";
import SvgPerson from "../../../../iconComponents/Icons/Person";
import SvgLock from "../../../../iconComponents/Icons/Lock";
import AuthenticationToggle from "../../../AuthenticationToggle/AuthenticationToggle";
import Button from "../../../Button/Button";
import { useRegisterContext } from "../../../../contexts/RegisterContext";
import useForm from "../../../../hooks/useForm";

export const AuthForm = () => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const { formValues, GoNextPage } = useRegisterContext();
  const { email, password } = formValues;
  const confirmPassword = useForm("confirmPassword", password.value);

  function handleClick() {
    if (email.validate() && password.validate() && confirmPassword.validate()) {
      GoNextPage();
    }
  }

  return (
    <>
      <Form>
        <Input.Input label="email" id="email" error={email.error}>
          <SvgPerson />
          <Input.Field
            type="email"
            value={email.value}
            handleChange={email.onChange}
            onBlur={() => email.validate()}
            placeholder="type your email"
          />
        </Input.Input>
        <Input.Input label="password" id="password" error={password.error}>
          <SvgLock />
          <Input.Field
            type={passwordVisible ? "text" : "password"}
            value={password.value}
            handleChange={password.onChange}
            onBlur={() => password.validate()}
            placeholder="type your password"
          />
        </Input.Input>
        <Input.Input
          label="confirm you password"
          id="passwordConfirm"
          error={confirmPassword.error}
        >
          <SvgLock />
          <Input.Field
            type={passwordVisible ? "text" : "password"}
            value={confirmPassword.value}
            handleChange={confirmPassword.onChange}
            onBlur={() => confirmPassword.validate()}
            placeholder="type your password again"
          />
        </Input.Input>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="visible"
            name="visible"
            onChange={({ target }) => setPasswordVisible(target.checked)}
          />
          <label htmlFor="visible">Show password</label>
        </div>

        <Button text="Continue" onClick={handleClick} />
      </Form>

      <AuthenticationToggle
        line="Already have an account?"
        anchor="Login in your account"
        href="/login"
      />
    </>
  );
};

export default AuthForm;
