import ValueContext from "./ValueContext";
import { useState } from "react";

const ValueContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(1);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
  }

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...History, newCount]);
  }

  const reset = () => {
    setCount(0);
    setHistory();
  }

  return (
    <ValueContext.Provider value={{count, history, step, increment, decrement, reset}}>
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;
