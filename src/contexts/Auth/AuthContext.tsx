import React from "react";
import { User } from "../../types/User";
import useLocalStorage from "../../hooks/useLocalStorage";
import { login, validate } from "../../api";
import { useNotificationContext } from "../NotificationContext";

type AuthContextType = {
  user: User | null;
  signin: (
    email: string,
    password: string,
    remember: boolean
  ) => Promise<boolean>;
  signout: VoidFunction;
};

const AuthContext = React.createContext<AuthContextType>(null!);

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("AuthContext must be used inside provider");
  return context;
};

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = React.useState<User | null>(null);
  const { state: token, setState: setToken } = useLocalStorage("token", "");
  const { createNotification } = useNotificationContext();

  const signin = async (email: string, password: string, remember: boolean) => {
    console.log(email);
    const { url, options } = login(email, password, remember);
    const response = await fetch(url, options);

    let data: { user: User; token: string } | null = null;
    if (!response.ok) {
      const message = await response.text();
      createNotification({ type: "Alert", message: message });
      return false;
      //return { response, data };
    }
    data = await response.json();

    if (data?.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return false;
    }
    //return { response, data };
    return true;
  };

  const signout = () => {
    setUser(null);
    setToken("");
  };

  const validateToken = React.useRef<VoidFunction>();
  validateToken.current = async () => {
    if (token) {
      const { url, options } = validate(token);
      const response = await fetch(url, options);

      let data: { user: User } | null = null;
      if (!response.ok) {
        createNotification({ type: "Alert", message: "Your session expired" });
      }

      data = await response.json();
      if (data?.user) {
        setUser(data.user);
      }
    }
  };

  React.useEffect(() => {
    if (validateToken.current) {
      validateToken.current();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
