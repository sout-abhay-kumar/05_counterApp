import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Count")

  const decrease = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <div className="my-30">
        <h1>
          {text} : {count}
        </h1>
      </div>

      <div className="flex gap-x-48">
        <button
          className="rounded shadow-xl/30 inset-shadow-xs active:shadow-none active:outline-none active:scale-96"
          onClick={() => {
            setCount(count + 1);
            setText("Incrementing");
          }}
        >
          Increment
        </button>

        <button
          className="btn-1 rounded shadow-xl/30 inset-shadow-xs active:shadow-none active:scale-96"
          onClick={() => {
            decrease();
            setText("Decrementing");
          }}
        >
          Decrement
        </button>
      </div>

      <div>
        <button onClick={() => {
          setCount(0);
        }}>Reset</button>
      </div>
    </>
  );
}

export default App;
