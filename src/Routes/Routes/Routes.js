import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Home2 from "../../Pages/Home2/Home2";
import Home3 from "../../Pages/Home3/Home3";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home2", element: <Home2 /> },
      { path: "/home3", element: <Home3 /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
