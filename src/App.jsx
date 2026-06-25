import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Orders from "./components/OrdersComponents/Orders/Orders";
import Profile from "./components/ProfileComponents/Profile/Profile";
import ProductsPage from "./pages/ProductsPage";
import Login from "./components/LoginComponents/Login/Login";

import EmptyCart from "./components/CartComponents/EmptyCart/EmptyCart";

import "./App.css";
import CartPage from "./pages/CartPage";
import ProtectedRoute from "./layouts/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<ProductsPage />}></Route>
        <Route path="/exp" element={<EmptyCart />}></Route>
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
