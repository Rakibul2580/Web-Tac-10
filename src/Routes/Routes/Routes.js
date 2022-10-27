import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Courses from "../../Pages/Courses/Courses";
import Detail from "../../Pages/Detail/Detail";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Profile/Profile";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/detail/:id",
        loader: ({ params }) => {
          return fetch(
            `https://math-server-side-rakibul2580.vercel.app/data/${params.id}`
          );
        },

        element: <Detail />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) => {
          return fetch(
            `https://math-server-side-rakibul2580.vercel.app/data/${params.id}`
          );
        },

        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      { path: "/faq", element: <Faq /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
