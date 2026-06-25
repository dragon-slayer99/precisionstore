import "./Cart.css";

import CartHeader from "../CartHeader/CartHeader";
import CartItems from "../CartItems/CartItems";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartSummary from "../CartSummary/CartSummary";

function Cart() {

  return (
    <>
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
    </>
  );
}

export default Cart;
