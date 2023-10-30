const URL = "http://localhost:8080";

interface RequestParams {
  url: string;
  options: RequestInit | undefined;
}

export const register = (
  email: string,
  password: string,
  name: string
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
        role: "USER",
      }),
    },
  };
};

export const login = (email: string, password: string): RequestParams => {
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
      }),
    },
  };
};

export const getUserData = (token: string): RequestParams => {
  return {
    url: `${URL}/user/`,
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
};
