import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
