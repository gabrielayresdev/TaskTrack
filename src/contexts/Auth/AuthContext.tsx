import React from "react";
import { User } from "../../types/User";
import useApi from "../../hooks/useApi";
import useLocalStorage from "../../hooks/useLocalStorage";

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
  const api = useApi();
  const { state: token, setState: setToken } = useLocalStorage("token", "");

  const signin = async (email: string, password: string, remember: boolean) => {
    const data = await api.signin(email, password, remember);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = () => {
    setUser(null);
    setToken("");
  };

  React.useEffect(() => {
    const validateToken = async () => {
      if (token) {
        const data = await api.validateToken(token);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [token, api]);

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
