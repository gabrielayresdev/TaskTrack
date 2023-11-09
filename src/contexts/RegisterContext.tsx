import React from "react";
import useForm, { IUseForm } from "../hooks/useForm";
import usePagination from "../hooks/usePagination";
import { Outlet, useNavigate } from "react-router-dom";
import { register as userRegister } from "../api";
import { useNotificationContext } from "./NotificationContext";

const RegisterContext = React.createContext<IRegisterContext | null>(null);

interface IRegisterData {
  email: IUseForm;
  password: IUseForm;
  name: IUseForm;
  cellphone: IUseForm;
  groups: [string[], React.Dispatch<React.SetStateAction<string[]>>];
}

interface IRegisterContext {
  formValues: IRegisterData;
  page: number;
  GoNextPage: VoidFunction;
  GoPreviousPage: VoidFunction;
  register: () => Promise<{ response: Response }>;
}

export function useRegisterContext() {
  const context = React.useContext(RegisterContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

export const RegisterContextLayout = () => {
  return (
    <RegisterContextProvider>
      <Outlet />
    </RegisterContextProvider>
  );
};

const RegisterContextProvider = ({ children }: React.PropsWithChildren) => {
  const formValues = {
    email: useForm("email"),
    password: useForm("password"),
    name: useForm("name"),
    cellphone: useForm("number"),
    groups: React.useState<string[]>([]),
  };
  const { page, GoNextPage, GoPreviousPage } = usePagination(3);
  const { createNotification } = useNotificationContext();
  const navigate = useNavigate();

  async function register() {
    const { url, options } = userRegister(
      formValues.email.value,
      formValues.password.value,
      formValues.name.value,
      formValues.cellphone.value,
      formValues.groups[0]
    );

    const response = await fetch(url, options);

    if (!response.ok) {
      const message = await response.text();
      createNotification({ type: "Alert", message: message });
    } else {
      createNotification({
        type: "Success",
        message: "User created with success.",
      });
      navigate("/login");
    }

    return { response };
  }

  return (
    <RegisterContext.Provider
      value={{ formValues, page, GoNextPage, GoPreviousPage, register }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
