import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import CatImg from "@/assets/dollar.svg";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>App PLATFORM={__PLATFORM__}</div>
      <CatImg
        width={50}
        height={50}
        color="green
      "
      />
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
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

      <Outlet />
    </>
  );
};
