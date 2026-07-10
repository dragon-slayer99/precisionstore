import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./components/LoginComponents/Login/Login";

import EmptyOrders from "./components/OrdersComponents/EmptyOrders/EmptyOrders";

import "./App.css";
import CartPage from "./pages/CartPage";
import ProtectedRoute from "./layouts/ProtectedRoute";
import PublicRoute from "./layouts/PublicRoute";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<ProductsPage />}></Route>
        <Route path="/exp" element={<EmptyOrders />}></Route>
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/orders" element={<OrderPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Route>
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
