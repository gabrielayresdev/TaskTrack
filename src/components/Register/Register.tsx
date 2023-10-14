import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Index";
import styles from "./Register.module.sass";
import Button from "../Button/Button";
import AuthenticationToggle from "../AuthenticationToggle/AuthenticationToggle";

import SvgPerson from "../../iconComponents/Icons/Person";
import SvgLock from "../../iconComponents/Icons/Lock";

export const Register = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  function handleClick(): true {
    return true;
  }
  return (
    <div className={styles.wrapper}>
      <Form>
        <Input.Input label="email" id="email">
          <SvgPerson />
          <Input.Field
            type="email"
            value={email}
            setValue={setEmail}
            placeholder="type your email"
          />
        </Input.Input>
        <Input.Input label="password" id="password">
          <SvgLock />
          <Input.Field
            type={passwordVisible ? "text" : "password"}
            value={password}
            setValue={setPassword}
            placeholder="type your password"
          />
        </Input.Input>
        <Input.Input label="confirm you password" id="passwordConfirm">
          <SvgLock />
          <Input.Field
            type={passwordVisible ? "text" : "password"}
            value={password}
            setValue={setPassword}
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
    </div>
  );
};

export default Register;
