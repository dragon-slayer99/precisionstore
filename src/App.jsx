import { Routes, Route } from "react-router-dom";
import Header from "./components/HomeComponents/Header/Header";
import Footer from "./components/HomeComponents/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/ProductsPage";
import Orders from "./components/OrdersComponents/Orders/Orders";
import Profile from "./components/ProfileComponents/Profile/Profile";
import ApiFetch from "./components/ApiFetch/ApiFetch";
import Counter from "./components/Counter/Counter";
import ProductDetails from "./components/ProductsComponents/ProductDetails/ProductDetails";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/demo-01" element={<ApiFetch />}></Route>
        <Route path="/demo-02" element={<Counter />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
