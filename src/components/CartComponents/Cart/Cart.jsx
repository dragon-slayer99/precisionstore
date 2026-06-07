import "./Cart.css";

import CartHeader from "../CartHeader/CartHeader";
import CartItems from "../CartItems/CartItems";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartSummary from "../CartSummary/CartSummary";

function Cart() {
  return (
    <main class="cart-surface">
      <div class="cart-container">

        <CartHeader />

        <div class="cart-workspace">
          <div class="main-content-stack">
            <CartItems />

            <CheckoutForm />
          </div>

          <CartSummary />
        </div>
      </div>
    </main>
  );
}

export default Cart;
