import "./Cart.css";

import CartHeader from "../CartHeader/CartHeader";
import CartItems from "../CartItems/CartItems";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartSummary from "../CartSummary/CartSummary";
import { useEffect, useState } from "react";
import { CartContext } from "../../../utils/ContextProducer";
import { getCartItems } from "../../../api/cartApi";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async function loadCart() {
      const data = await getCartItems();


      // setCartItems(data.items);

    })();
  }, []);

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
