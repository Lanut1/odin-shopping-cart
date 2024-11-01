import { createBrowserRouter } from "react-router-dom";
import RootElement from "./RootElement";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage/HomePage";
import ShopPage from "./ShopPage/ShopPage";
import CartPage from "./CartPage/CartPage";


const router = createBrowserRouter([{
  path: "/",
    element: <RootElement /> ,
    errorElement: <ErrorPage /> ,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
}])

export default router;