import React from "react";

interface ModalContextInterface {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextInterface | null>(null);

export function useModalContext() {
  const context = React.useContext(ModalContext);
  if (!context) throw new Error("useContext must be inside provider");
  else return context;
}

const ModalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
