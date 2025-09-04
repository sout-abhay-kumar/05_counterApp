import { useContext, useState } from "react";
import ValueContext from "../Context/ValueContext";

function Home() {
  const { count, step, setStep, increment, decrement, reset, stopTimer, startTimer, text, setText} =
    useContext(ValueContext);
 
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
          className="rounded mx-10 w-32 h-10 shadow-xl/30 active:scale-95 font-mono"
          onClick={() => {
            increment();
            setText("Incrementing");
          }}
        >
          Increment
        </button>

        <button
          className="rounded mx-10 w-32 h-10 shadow-xl/30 active:scale-95 font-mono"
          onClick={() => {
            decrement();
            setText("Decrementing");
          }}
        >
          Decrement
        </button>
      </div>

      <div className="flex justify-center py-6">
        <button
          className="rounded mx-10 w-32 h-10 shadow-xl/30 active:scale-95 font-mono"
          onClick={() => {
            reset();
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
          onChange={(e) => setStep(Number(e.target.value))}
          className="w-80 h-10 shadow-xl/30 mx-5"
          type="number"
          placeholder="Enter Number of steps"
        />
      </div>

      <div>
        <button className="rounded mx-10 w-32 h-10 shadow-xl/30 active:scale-75 font-mono"
          onClick={startTimer}
      
        >
          Start Timer
        </button>
      </div>

      <div>
        <button className="rounded mx-10 w-32 h-10 shadow-xl/30 active:scale-150 font-mono"
          onClick={stopTimer}
        >
          Stop Timer
        </button>
      </div>
    </>
  );
}

export default Home;
