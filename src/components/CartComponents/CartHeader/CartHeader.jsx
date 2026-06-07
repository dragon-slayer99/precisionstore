import "./CartHeader.css";
import { Link } from "react-router-dom";

function CartHeader() {

  return (
    <header class="cart-header">
      <div class="breadcrumbs">
        <Link to="/" >HOME</Link>
        <span class="separator">/</span>
        <span class="current">CART</span>
      </div>

      <div class="title-identity-line">
        <h1 class="cart-main-title">SHOPPING CART</h1>
        <span class="queue-status">2 ITEMS</span>
      </div>

      <div class="m-stripe-divider"></div>
    </header>
  );
}

export default CartHeader;
