import React from "react";
import useForm, { IUseForm } from "../hooks/useForm";
import usePagination from "../hooks/usePagination";

const RegisterContext = React.createContext<IRegisterContext | null>(null);

interface IRegisterData {
  email: IUseForm;
  password: IUseForm;
  name: IUseForm;
  cellphone: IUseForm;
  groups: string[];
}

interface IRegisterContext {
  formValues: IRegisterData;
  page: number;
  GoNextPage: VoidFunction;
  GoPreviousPage: VoidFunction;
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
    groups: [],
  };
  const { page, GoNextPage, GoPreviousPage } = usePagination(3);

  return (
    <RegisterContext.Provider
      value={{ formValues, page, GoNextPage, GoPreviousPage }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
