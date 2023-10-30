import React from "react";
import useForm, { IUseForm } from "../hooks/useForm";
import usePagination from "../hooks/usePagination";
import { Outlet } from "react-router-dom";
import { register as userRegister } from "../api";

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

  async function register() {
    const { url, options } = userRegister(
      formValues.email.value,
      formValues.password.value,
      formValues.name.value
    );

    const response = await fetch(url, options);

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
