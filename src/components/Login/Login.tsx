import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Index";
import styles from "./Login.module.sass";
import Button from "../Button/Button";
import AuthenticationToggle from "../AuthenticationToggle/AuthenticationToggle";

import SvgPerson from "../../iconComponents/Icons/Person";
import SvgLock from "../../iconComponents/Icons/Lock";
import eyeSlashed from "../../assets/Icons/EyeSlashed.png";
import eyeRegular from "../../assets/Icons/EyeRegular.png";
import useForm from "../../hooks/useForm";

export const Login = () => {
  const email = useForm("email");
  const password = useForm("password");

  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  function handleClick(): true {
    return true;
  }
  return (
    <div className={styles.wrapper}>
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
        <Input.Input label="password" id="password " error={password.error}>
          <SvgLock />
          <Input.Field
            type={passwordVisible ? "text" : "password"}
            value={password.value}
            handleChange={password.onChange}
            onBlur={() => password.validate()}
            placeholder="type your password"
          />
          <div
            style={{ cursor: "pointer", marginLeft: "auto", width: "1.5rem" }}
            onMouseOver={() => {
              setPasswordVisible(true);
            }}
            onMouseLeave={() => {
              setPasswordVisible(false);
            }}
          >
            {passwordVisible ? (
              <img src={eyeRegular} />
            ) : (
              <img src={eyeSlashed} />
            )}
          </div>
        </Input.Input>

        <Button text="Login with email" onClick={handleClick} />
      </Form>

      <AuthenticationToggle
        line="Don’t have an account yet?"
        anchor="Create an account"
        href="/register"
      />
    </div>
  );
};

export default Login;
