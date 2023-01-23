import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Product";
import SignUp from "../../pages/SignUp/SignUp";
import Category from "../../pages/Single/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
    ],
  },
]);

export default router;
