import { useRoutes } from "react-router-dom";
import { Login } from "../pages/Login/Login";

import SuccessMessage from "../components/ui/SuccessMessage";
import ForgotPassword from "../pages/Login/ForgotPassword";
import { Home } from "../pages/public/Home";
import Signup from "../pages/signup/Signup";

export const PageRoutes = () => {
  let route = useRoutes([
    { path: "/", element: <Home /> },

    { path: "/about", element: <h1>about us</h1> },
    { path: "/pricing", element: <h1>Pricing</h1> },
    { path: "/support", element: <h1>Support Center</h1> },
    { path: "/login", element: <Login /> },
    { path: "/forgotpassword", element: <ForgotPassword /> },
    { path: "/success", element: <SuccessMessage /> },
    { path: "/signup", element: <Signup /> },
  ]);

  return route;
};
