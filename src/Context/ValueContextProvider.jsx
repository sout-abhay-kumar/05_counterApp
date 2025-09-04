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

  const [step, setStep] = useState(1); 
  const [text, setText] = useState("Count"); 

  
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history))
    localStorage.setItem("count", JSON.stringify(count))
  }, [history], count);

  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

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

  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + step;
          return newCount;
        });
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
      setText("Timer Running")
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
      setText("Timer Stopped")
    }
  }

  return (
    <ValueContext.Provider
      value={{ count, history, step, setStep, increment, decrement, reset, stopTimer, startTimer, isRunning, text, setText }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;
