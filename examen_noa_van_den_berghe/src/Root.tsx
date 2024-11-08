import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/opdracht-1">Opdracht 1</NavLink>
          <NavLink to="/opdracht-2">Opdracht 2</NavLink>
          <NavLink to="/opdracht-3">Opdracht 3</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
