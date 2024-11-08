import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Opdracht1 from "./components/Opdracht1";
import Opdracht2 from "./components/Opdracht2";
import Opdracht3 from "./components/Opdracht3";
import Root from "./Root";
import PageNotFound from "./components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "opdracht-1", element: <Opdracht1 /> },
      { path: "opdracht-2", element: <Opdracht2 /> },
      { path: "opdracht-3", element: <Opdracht3 /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
