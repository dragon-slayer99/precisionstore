import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/ProductsPage";
import Profile from "./components/profile/Profile";
import ApiFetch from './components/ApiFetch/ApiFetch';
import Counter from "./components/Counter/Counter";

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/demo-01" element={<ApiFetch />}></Route>        
      <Route path="/demo-02" element={<Counter />}></Route>        
    </Routes>
  );
}

export default App;
