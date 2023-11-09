const URL = "http://localhost:8080";

interface RequestParams {
  url: string;
  options: RequestInit | undefined;
}

export const register = (
  email: string,
  password: string,
  name: string,
  cellphone: string,
  groups: string[]
): RequestParams => {
  return {
    url: `${URL}/auth/register`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        name: name,
        password: password,
        telephone: cellphone,
        groups: groups,
        role: "USER",
      }),
    },
  };
};

export const login = (
  email: string,
  password: string,
  remember: boolean
): RequestParams => {
  return {
    url: `${URL}/auth/login`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
        remember: remember,
      }),
    },
  };
};

export const validate = (token: string): RequestParams => {
  return {
    url: `${URL}/auth/validate`,
    options: {
      method: "POST",
      headers: {
        Authorization: token,
      },
    },
  };
};
