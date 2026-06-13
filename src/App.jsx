import { Routes, Route } from "react-router-dom";
import Header from "./components/HomeComponents/Header/Header";
import Footer from "./components/HomeComponents/Footer/Footer";
import Home from "./pages/Home";
import Orders from "./components/OrdersComponents/Orders/Orders";
import Cart from "./components/CartComponents/Cart/Cart";
import Profile from "./components/ProfileComponents/Profile/Profile";
import ProductsPage from "./pages/ProductsPage";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<ProductsPage />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
