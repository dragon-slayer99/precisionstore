import { useContext } from "react";
import "./CartHeader.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../../utils/ContextProducer";

function CartHeader() {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <header className="cart-header">
      <div className="breadcrumbs">
        <Link to="/">HOME</Link>
        <span className="separator">/</span>
        <span className="current">CART</span>
      </div>

      <div className="title-identity-line">
        <h1 className="cart-main-title">SHOPPING CART</h1>
        <span className="queue-status">{cartItems.length} ITEMS</span>
      </div>
    </header>
  );
}

export default CartHeader;
