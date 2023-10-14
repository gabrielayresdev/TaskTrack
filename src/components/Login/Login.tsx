import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import styles from "./Login.module.sass";
import Button from "../Button/Button";
import AuthenticationToggle from "../AuthenticationToggle/AuthenticationToggle";

export const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  function handleClick(): true {
    return true;
  }
  return (
    <div className={styles.wrapper}>
      <Form>
        <Input
          label="email"
          id="email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="type your email"
        />
        <Input
          label="password"
          id="password"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="type your password"
        />

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
