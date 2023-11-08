import { login, validate } from "../api";

const useApi = () => {
  const validateToken = async (token: string) => {
    const { url, options } = validate(token);
    const response = await fetch(url, options);
    return await response.json();
  };

  const signin = async (email: string, password: string) => {
    const { url, options } = login(email, password);
    const response = await fetch(url, options);
    return await response.json();
  };

  const signout = () => {};

  return {
    validateToken,
    signin,
    signout,
  };
};

export default useApi;
