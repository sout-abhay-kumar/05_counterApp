import ValueContext from "./ValueContext";
import { useEffect, useState } from "react";

const ValueContextProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? JSON.parse(savedCount) : 0;
  });
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history))
    localStorage.setItem("count", JSON.stringify(count))
  }, [history], count);

  const [step, setStep] = useState(1);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - step;
      setCount(newCount);
      setHistory([...history, newCount]);
    }
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <ValueContext.Provider
      value={{ count, history, step, setStep, increment, decrement, reset }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;
