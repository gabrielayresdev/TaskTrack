import React from "react";
import useForm, { IUseForm } from "../hooks/useForm";
import usePagination from "../hooks/usePagination";

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
  register: VoidFunction;
}

export function useRegisterContext() {
  const context = React.useContext(RegisterContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

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
    const response = await fetch(
      "https://tasktrack-gabrielayresdev.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formValues.email.value,
          name: formValues.name.value,
          password: formValues.password.value,
          role: "USER",
        }),
      }
    );
    const json = response.json();
    console.log(json);
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
