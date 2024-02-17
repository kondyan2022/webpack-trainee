import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import CatImg from "@/assets/dollar.svg";
import developers from "@/assets/developers.json";

export const App = () => {
  const [counter, setCounter] = useState(0);
  // const sum: number = "ghghhhg";

  console.log(developers);
  return (
    <>
      <div data-testid={"Platform"}>
        App PLATFORM={__PLATFORM__} dsgsdgdfggf
      </div>
      {__ENV__ === "development" && <div>Development mode</div>}
      <CatImg
        width={50}
        height={50}
        color="red
      "
      />
      ghhghgh
      <Link data-testid={"Platform"} to={"/about"}>
        About
      </Link>
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
