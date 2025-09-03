import { useContext } from "react";
import ValueContext from "../Context/ValueContext";

function History() {
  const { history, reset } = useContext(ValueContext);
  return (
    <>
      <div className="text-center py-5">
        <span className="text-black text-3xl font-mono font-bold hover:text-red-500">
          History
        </span>

        <div>
          <h1 className="text-left py-10 text-5xl font-extrabold">
            History till Now...
          </h1>
        </div>

        <div>
          <ul className="text-3xl text-bold space-y-6">
            {history.map((value, index) => (
              <li key={index}>
                Step {index + 1} : {value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          {history.length > 0 ? (<button
            className="rounded mx-10 w-32 h-10 shadow-xl/30 active:scale-95 font-mono my-7 outline-amber-500 cursor-pointer"
            onClick={() => {
              reset();
            }}
          >
            Delete History
          </button>): null}
        </div>
      </div>
    </>
  );
}

export default History;
