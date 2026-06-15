import "./CartItems.css";

import CartItem from "../CartItem/CartItem";
import CartTableHeader from "../CartTableHeader/CartTableHeader";

function CartItems() {
  return (
    <section className="cart-items-matrix">
      <CartTableHeader />

      <CartItem />
      <CartItem />
    </section>
  );
}
export default CartItems;
