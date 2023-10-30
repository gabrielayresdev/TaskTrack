import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface IUserData {
  name: string;
  email: string;
}

interface IUserContext {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userData: IUserData | null;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  rememberUser: VoidFunction;
}

const UserContext = React.createContext<IUserContext | null>(null);

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const [token, setToken] = React.useState<string>("");
  const [userData, setUserData] = React.useState<IUserData>(() => {
    return {
      name: "",
      email: "",
    };
  });

  function rememberUser() {
    localStorage.setItem("token", token);
  }

  return (
    <UserContext.Provider
      value={{ token, setToken, userData, setUserData, rememberUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
