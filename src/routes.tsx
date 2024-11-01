import { createBrowserRouter } from "react-router-dom";
import RootElement from "./components/RootElement";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ShopPage from "./components/ShopPage/ShopPage";
import CartPage from "./components/CartPage/CartPage";


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