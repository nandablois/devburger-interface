import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Menu,
  Home,
  Register,
  Login,
  Checkout,
  CompletePayment,
} from "../pages";

import { UserLaytout } from "../layouts/UserLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLaytout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout" element={<CompletePayment />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}

