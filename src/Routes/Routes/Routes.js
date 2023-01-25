import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Cart from "../../pages/Cart/Cart";
import Checkout from "../../pages/Checkout/Checkout";
import Home from "../../pages/Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import Category from "../../pages/Single/Category";
import ProductDetails from "../../pages/Single/ProductDetails";

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
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

export default router;
