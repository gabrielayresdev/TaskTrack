import React from "react";

interface IRules {
  [key: string]: {
    validation: () => boolean;
  };
}

type IRulesTypes =
  | "email"
  | "password"
  | "confirmPassword"
  | "name"
  | "number"
  | "notNull"
  | null;

const useForm = (type: IRulesTypes, compr?: string) => {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const rules: IRules = {
    email: {
      validation: () => {
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (value.length === 0) {
          setError("Required field");
          return false;
        } else if (!regex.test(value)) {
          setError("Invalid email");
          return false;
        } else {
          setError(null);
          return true;
        }
      },
    },
    password: {
      validation: () => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

        if (value.length === 0) {
          setError("Required field");
          return false;
        } else if (!regex.test(value)) {
          setError(
            "Invalid password. Password must contain a minimum of 4 characters, including at least one uppercase letter, one lowercase letter, and one number."
          );
          return false;
        } else {
          setError(null);
          return true;
        }
      },
    },
    confirmPasword: {
      validation: () => {
        if (value.length === 0) {
          setError("Required field");
          return false;
        } else if (value !== compr) {
          setError("Passwords don't match");
          return false;
        } else {
          setError(null);
          return false;
        }
      },
    },
    name: {
      validation: () => {
        const regex = /^[a-zA-ZÀ-ÿ\s]$/;

        if (value.length === 0) {
          setError("Required field");
          return false;
        } else if (!regex.test(value)) {
          setError("Special characters are not accepted in the name field");
          return false;
        } else {
          setError(null);
          return true;
        }
      },
    },
    number: {
      validation: () => {
        const regex =
          /^(?:\+?55\s?)?(?:(?:\(\d{2}\)|\d{2})(?:\s?|-)?)(?:\d{5}(?:-|\s?)\d{4}|\d{10})$/g;
        if (value.length === 0) {
          setError("Required field");
          return false;
        } else if (!regex.test(value)) {
          setError("Invalid number");
          return false;
        } else {
          setError(null);
          return true;
        }
      },
    },
    notNull: {
      validation: () => {
        if (value.length === 0) {
          setError("Required field");
          return false;
        }
        setError(null);
        return true;
      },
    },
  };

  function validate() {
    if (type) {
      return rules[type].validation();
    } else return true;
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate();
    else setValue(target.value);
  }

  return { value, error, onChange, validate: () => validate() };
};

export default useForm;