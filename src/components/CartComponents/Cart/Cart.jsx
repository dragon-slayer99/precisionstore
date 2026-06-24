import "./Cart.css";

import CartHeader from "../CartHeader/CartHeader";
import CartItems from "../CartItems/CartItems";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartSummary from "../CartSummary/CartSummary";
import { CartContext } from "../../../utils/ContextProducer";


function Cart({cartItems, setCartItems}) {

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
