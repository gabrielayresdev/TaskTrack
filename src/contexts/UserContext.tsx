import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { getUserData } from "../api";
import { useNotificationContext } from "./NotificationContext";
import { useNavigate } from "react-router-dom";

interface IUserData {
  name: string;
  email: string;
}

interface IUserContext {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userData: IUserData | null;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}

const UserContext = React.createContext<IUserContext | null>(null);

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { state: token, setState: setToken } = useLocalStorage("token", "");
  const [userData, setUserData] = React.useState<IUserData>(() => {
    return {
      name: "",
      email: "",
    };
  });

  return (
    <UserContext.Provider value={{ token, setToken, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
