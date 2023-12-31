import React from "react";
import AuthenticationToggle from "../../components/FormComponents/AuthenticationToggle/AuthenticationToggle";
import Form from "../../components/FormComponents/Form/Form";
import Input from "../../components/FormComponents/Input/Index";
import Button from "../../components/Shared/Button/Button";
import styles from "./Login.module.sass";
import useForm from "../../hooks/useForm";
import SvgLock from "../../iconComponents/Icons/Lock";
import SvgPerson from "../../iconComponents/Icons/Person";
import AuthHeader from "../../components/Shared/AuthHeader/AuthHeader";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/FormComponents/Checkbox/Checkbox";
import { EyeRegular, EyeSlashRegular } from "../../iconComponents/Icons";
import { useAuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const email = useForm("email");
  const password = useForm("password");
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [remember, setRemeber] = React.useState<boolean>(false);
  const auth = useAuthContext();

  const navigate = useNavigate();

  async function handleLogin() {
    // If input is not valid, the function stop
    if (!(password.validate() && email.validate())) return;

    const isLogged = await auth.signin(email.value, password.value, remember);

    if (isLogged) {
      navigate("/home");
    }
  }

  React.useEffect(() => {
    if (auth.user) {
      navigate("/home");
    }
  }, [auth.user, navigate]);

  return (
    <div className={styles.wrapper}>
      <AuthHeader />
      <Form className={styles.formWrapper}>
        <Input.Input label="email" id="email">
          <Input.Icon Icon={SvgPerson} />
          <Input.Field
            type="email"
            value={email.value}
            handleChange={email.onChange}
            onBlur={() => email.validate()}
            placeholder="type your email"
          />
        </Input.Input>
        <Input.Input label="password" id="password">
          <Input.Icon Icon={SvgLock} />
          <Input.Field
            type={passwordVisible ? "text" : "password"}
            value={password.value}
            handleChange={password.onChange}
            onBlur={() => password.validate()}
            placeholder="type your password"
          />
          <Input.Icon
            Icon={passwordVisible ? EyeRegular : EyeSlashRegular}
            style={{ cursor: "pointer", marginLeft: "auto", width: "1.5rem" }}
            className={styles.revealPassword}
            onMouseOver={() => {
              setPasswordVisible(true);
            }}
            onMouseLeave={() => {
              setPasswordVisible(false);
            }}
          />
        </Input.Input>

        <Checkbox
          checked={remember}
          setChecked={setRemeber}
          id="remember"
          label="Remember me for 7 days"
        />

        <Button text="Login with email" onClick={handleLogin} />
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
