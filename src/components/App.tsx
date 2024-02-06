import { useState } from "react";
import "./App.scss";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>App</div>
      <div>{counter}</div>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => (prev += 1));
        }}
      >
        inc
      </button>
    </>
  );
};
