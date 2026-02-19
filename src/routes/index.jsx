import { createBrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components";
import {
  Cart,
  Menu,
  Home,
  Register,
  Login,
  Checkout,
  CompletePayment,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/cardapio",
    element: (
      <>
        <Header />
        <Menu />,
      </>
    ),
  },

  {
    path: "/carrinho",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/complete",
    element: <CompletePayment />,
  },
]);
