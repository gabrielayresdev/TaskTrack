import React from "react";

const useLocalStorage = (key: string, initial: string) => {
  const [state, setState] = React.useState(() => {
    const local = localStorage.getItem(key);
    return local ? local : initial;
  });

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return { state, setState };
};

export default useLocalStorage;
