import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Orders from "./components/OrdersComponents/Orders/Orders";
import Cart from "./components/CartComponents/Cart/Cart";
import Profile from "./components/ProfileComponents/Profile/Profile";
import ProductsPage from "./pages/ProductsPage";
import Login from "./components/LoginComponents/Login/Login";
import Toast from "./components/HomeComponents/Toast/Toast";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/products/:id" element={<ProductsPage />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>

      <Toast duration={2500} title={"Cart Toast"} message={"Cart item is added"} />
    </>
  );
}

export default App;
