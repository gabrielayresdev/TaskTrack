import React from "react";
import { getUserData } from "../api";

interface IUserData {
  name: string;
  email: string;
}

interface IUserContext {
  token: string;
  updateToken: (token: string, remember: boolean) => void;
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
  const [token, setToken] = React.useState<string>(() => {
    const temp = localStorage.getItem("token");
    return temp ? temp : "";
  });
  const [userData, setUserData] = React.useState<IUserData>(() => {
    return {
      name: "",
      email: "",
    };
  });

  React.useEffect(() => {
    async function fetchUserData() {
      const { url, options } = getUserData(token);

      const response = await fetch(url, options);

      if (response) {
        const json = await response.json();
        setUserData((current) => {
          return { ...current, name: json.name, email: json.username };
        });
      } else {
        setToken("");
        localStorage.removeItem("token");
        setUserData((current) => {
          return { ...current, name: "", email: "" };
        });
      }
    }

    fetchUserData();
  }, [token]);

  function updateToken(token: string, remember = false) {
    setToken(token);
    if (remember) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }

  return (
    <UserContext.Provider value={{ token, updateToken, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
