import "./CartHeader.css";
import { Link } from "react-router-dom";

function CartHeader() {
  return (
    <header className="cart-header">
      <div className="breadcrumbs">
        <Link to="/">HOME</Link>
        <span className="separator">/</span>
        <span className="current">CART</span>
      </div>

      <div className="title-identity-line">
        <h1 className="cart-main-title">SHOPPING CART</h1>
        <span className="queue-status">2 ITEMS</span>
      </div>
    </header>
  );
}

export default CartHeader;
