import ValueContext from "./ValueContext";
import { useState } from "react";

const ValueContextProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;
