import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Products from "./pages/ProductsPage";
import Profile from "./components/profile/Profile";
import ApiFetch from "./components/ApiFetch/ApiFetch";
import Counter from "./components/Counter/Counter";
import ProductDetails from "./components/ProductDetails/ProductDetails";

import "./app.css";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
