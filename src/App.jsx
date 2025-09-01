import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Count");
  const [step, setStep] = useState();

  const decrease = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - step);
  };

  return (
    <>
      <div className="text-center text-5xl/30 font-serif">
        <h1>Counter App</h1>
      </div>
      <div className="text-center my-9 text-4xl font-mono">
        <h1>
          {text} : {count}
        </h1>
      </div>

      <div className="flex justify-center">
        <button
          className="rounded mx-10 w-32 h-10 shadow-xl/30 inset-shadow-xs active:shadow-none active:outline-none active:scale-96 font-mono"
          onClick={() => {
            setCount(count + step);
            setText("Incrementing");
          }}
        >
          Increment
        </button>

        <button
          className="rounded mx-10 w-32 h-10 shadow-xl/30 inset-shadow-xs active:shadow-none active:scale-96 font-mono"
          onClick={() => {
            decrease();
            setText("Decrementing");
          }}
        >
          Decrement
        </button>
      </div>

      <div className="flex justify-center py-6">
        <button
          className="ounded mx-10 w-32 h-10 shadow-xl/30 inset-shadow-xs active:shadow-none active:scale-96 font-mono"
          onClick={() => {
            setCount(0);
            setText("Count");
          }}
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center my-5">
        <h1 className="text-3xl">Input Steps</h1>
        <input
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
          className="w-80 h-10 shadow-xl/30 outline-amber-200 border-amber-700-400 mx-5"
          type="number"
          placeholder="Enter Number of steps"
        />
      </div>
    </>
  );
}

export default App;
