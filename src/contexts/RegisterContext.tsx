import React from "react";
import useForm, { IUseForm } from "../hooks/useForm";

const RegisterContext = React.createContext<IRegisterContext | null>(null);

interface IRegisterData {
  email: IUseForm;
  password: IUseForm;
  confirmPassword: IUseForm;
  name: IUseForm;
  cellphone: IUseForm;
  groups: string[];
}

interface IRegisterContext {
  state: IRegisterData;
  setState: React.Dispatch<React.SetStateAction<IRegisterData>>;
  values: any;
  dispatch: React.Dispatch<any>;
}

export function useRegisterContext() {
  const context = React.useContext(RegisterContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const RegisterContextProvider = ({ children }: React.PropsWithChildren) => {
  /* const [state, setState] = React.useState<IRegisterData>({
    email: useForm("email"),
    password: useForm("password"),
    confirmPassword: useForm("confirmPassword"),
    name: useForm("name"),
    cellphone: useForm("number"),
    groups: [],
  }); */
  /* const [values, dispatch] = React.useReducer(handleChange, {
    email: useForm("email"),
    password: useForm("password"),
    confirmPassword: useForm("confirmPassword"),
    name: useForm("name"),
    cellphone: useForm("number"),
    groups: [],
  }); */
  const [values, dispatch] = React.useReducer(handleChange, {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    cellphone: "",
    groups: [],
  });

  function handleChange(state, action) {
    switch (action.type) {
      case "email":
        return { ...state, email: action.content };
      case "password":
        return { ...state, password: action.content };
      case "confirmPassword":
        return { ...state, confirmPassword: action.content };
      case "name":
        return { ...state, name: action.content };
      case "cellphone":
        return { ...state, cellphone: action.content };
      case "groups":
        return { ...state, groups: [...state.groups, action.content] };

      default:
        return state;
    }
  }

  return (
    <RegisterContext.Provider value={{ values, dispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
