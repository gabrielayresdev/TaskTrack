import React from "react";
import AuthenticationToggle from "../../components/FormComponents/AuthenticationToggle/AuthenticationToggle";
import Form from "../../components/FormComponents/Form/Form";
import Input from "../../components/FormComponents/Input/Index";
import Button from "../../components/Shared/Button/Button";
import styles from "./Login.module.sass";

import eyeRegular from "../../assets/Icons/EyeRegular.png";
import eyeSlashed from "../../assets/Icons/EyeSlashed.png";
import { useNotificationContext } from "../../contexts/NotificationContext";
import useForm from "../../hooks/useForm";
import SvgLock from "../../iconComponents/Icons/Lock";
import SvgPerson from "../../iconComponents/Icons/Person";
import AuthHeader from "../../components/Shared/AuthHeader/AuthHeader";
import { getUserData, login } from "../../api";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const email = useForm("email");
  const password = useForm("password");
  const { createNotification } = useNotificationContext();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const { token, setToken, setUserData } = useUserContext();

  const navigate = useNavigate();

  React.useEffect(() => {
    const { url, options } = getUserData(token);

    async function request() {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = await response.text();
        createNotification({ type: "Alert", message });
      } else {
        const json = await response.json();
        setUserData((current) => {
          return { ...current, name: json.name, email: json.username };
        });
        console.log("Mudando...");
        navigate("/home");
      }
    }

    if (token) request();
  }, [token]);

  async function handleClick() {
    if (password.validate() && email.validate()) {
      const { url, options } = login(email.value, password.value);

      const response = await fetch(url, options);
      if (!response.ok) {
        const message = await response.text();
        createNotification({ type: "Alert", message: message });
      } else {
        const token = await response.text();
        setToken(token);
      }
    }

    return true;
  }
  return (
    <div className={styles.wrapper}>
      <AuthHeader />
      <Form className={styles.formWrapper}>
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
