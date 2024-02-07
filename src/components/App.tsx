import { useState } from "react";
import classes from "./App.module.scss";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>App</div>
      <div className={classes.value}>{counter}</div>
      <button
        className={classes.button}
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
