/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
