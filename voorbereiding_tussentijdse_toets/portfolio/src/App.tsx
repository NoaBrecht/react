import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import Oefening1 from "./components/Oefening1";
import Oefening2 from "./components/Oefening2";
import Oefening3 from "./components/Oefening3";
interface IThemeContext {
  theme: string,
  setTheme: (theme: string) => void
}

export const ThemeContext = React.createContext<IThemeContext>({theme: "light", setTheme: (theme: string) => {}});



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "oef1", element: <Oefening1 /> },
      { path: "oef2", element: <Oefening2 /> },
      { path: "oef3", element: <Oefening3 /> },
    ],
  },
]);

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme: theme, setTheme:setTheme}}>
    <RouterProvider router={router} />
    </ThemeContext.Provider>

  );
};

export default App;
