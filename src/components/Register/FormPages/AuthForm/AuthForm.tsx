import React from "react";
import styles from "./AuthForm.module.sass";
import Form from "../../../Form/Form";
import Input from "../../../Input/Index";
import SvgPerson from "../../../../iconComponents/Icons/Person";
import SvgLock from "../../../../iconComponents/Icons/Lock";
import AuthenticationToggle from "../../../AuthenticationToggle/AuthenticationToggle";
import Button from "../../../Button/Button";
import { useRegisterContext } from "../../../../contexts/RegisterContext";

export const AuthForm = () => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const { values, dispatch } = useRegisterContext();

  const { email, password, confirmPassword } = values;

  function handleClick(): true {
    return true;
  }

  return (
    <>
      <Form>
        <Input.Input label="email" id="email" error={email.error}>
          <SvgPerson />
          <Input.Field
            type="email"
            value={email.value}
            handleChange={({ target }) => {
              dispatch({ type: "email", content: target.value });
            }}
            onBlur={() => email.validate()}
            placeholder="type your email"
          />
        </Input.Input>
        <Input.Input label="password" id="password" error={password.error}>
          <SvgLock />
          <Input.Field
            type={passwordVisible ? "text" : "password"}
            value={password.value}
            handleChange={({ target }) => {
              dispatch({ type: "password", content: target.value });
            }}
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
            handleChange={({ target }) => {
              dispatch({ type: "email", content: target.value });
            }}
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

        <Button text="Sign up" onClick={handleClick} />
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
