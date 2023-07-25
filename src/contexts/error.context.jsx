import { createContext, useState } from "react";

const defaultErrorText = {
  errorText: "ليس مسموح لك بالحصول علي درجات اخري",
  setErrorText: () => null,
};

export const errorTextContext = createContext(defaultErrorText);

export const ErrorTextProvider = ({ children }) => {
  const [errorText, setErrorText] = useState(
    "ليس مسموح لك بالحصول علي درجات اخري"
  );
  const value = { errorText, setErrorText };

  return (
    <errorTextContext.Provider value={value}>
      {children}
    </errorTextContext.Provider>
  );
};
