import "./CartItems.css";

import CartItem from "../CartItem/CartItem";
import CartTableHeader from "../CartTableHeader/CartTableHeader";
import { useContext } from "react";
import { CartContext } from "../../../utils/ContextProducer";

function CartItems() {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <section className="cart-items-matrix">
      <CartTableHeader />

      {cartItems.map((cartItem) => (
        <CartItem cartItemDetails={cartItem} />
      ))}
      
    </section>
  );
}
export default CartItems;
