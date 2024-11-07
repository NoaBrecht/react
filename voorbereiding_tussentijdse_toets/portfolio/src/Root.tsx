import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "./App";

const Root = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/oef1">Oef1</NavLink>
          <NavLink to="/oef2">Oef2</NavLink>
          <NavLink to="/oef3">Oef3</NavLink>
        </nav>
      </header>
      <main style={{backgroundColor: theme === "dark" ? "white" : "black",}}>
      <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark")}} style={{backgroundColor: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black"}}>{theme}</button>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
