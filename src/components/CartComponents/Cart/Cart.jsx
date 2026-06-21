import "./Cart.css";

import CartHeader from "../CartHeader/CartHeader";
import CartItems from "../CartItems/CartItems";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartSummary from "../CartSummary/CartSummary";
import { useEffect, useState } from "react";
import { CartContext } from "../../../utils/ContextProducer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    (async function fetchCart() {
      const response = await fetch("http://localhost:8080/api/cart/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      });

      if (!response.ok) {
        console.log(response);
      }

      const data = await response.json();
      console.log(data);
    })()
  }, [accessToken])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <main className="cart-surface">
        <div className="cart-container">
          <CartHeader />

          <div className="cart-workspace">
            <div className="main-content-stack">
              <CartItems />

              <CheckoutForm />
            </div>

            <CartSummary />
          </div>
        </div>
      </main>
    </CartContext.Provider>
  );
}

export default Cart;
