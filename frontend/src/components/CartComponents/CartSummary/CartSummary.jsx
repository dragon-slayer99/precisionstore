import "./CartSummary.css";

import { CartContext } from "../../../utils/contextProducer";
import { useContext } from "react";

function CartSummary({ onPlaceOrder, isPlacingOrder }) {
  const { productsList, cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, cartItem) => {
    const currProduct = productsList.find(
      (product) => product.id === cartItem.productId,
    );

    if (!currProduct) return total;

    return total + currProduct.price * cartItem.quantity;
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <aside className="cart-summary-panel">
      <div className="summary-card">
        <h3 className="summary-title">ORDER SUMMARY</h3>

        <div className="summary-data-grid">
          <div className="data-row">
            <span className="data-key"> SUBTOTAL </span>
            <span className="data-val" id="subtotalVal">
              $ {Number(subtotal).toFixed(2)}
            </span>
          </div>

          <div className="data-row">
            <span className="data-key"> SHIPPING </span>
            <span className="data-val"> Free Shipping </span>
          </div>

          <div className="data-row">
            <span className="data-key"> TAX </span>
            <span className="data-val" id="taxVal">
              $ {Number(tax).toFixed(2)}
            </span>
          </div>
        </div>

        <div className="summary-total-row">
          <span className="total-key"> TOTAL </span>
          <span className="total-val" id="totalVal">
            $ {Number(total).toFixed(2)}
          </span>
        </div>

        <button
          className="btn-primary-action"
          id="checkoutBtn"
          onClick={onPlaceOrder}
          disabled={isPlacingOrder}
          style={isPlacingOrder ? { opacity: 0.6, cursor: "not-allowed" } : {}}
        >
          <span className="btn-text">
            {isPlacingOrder ? "PLACING ORDER..." : "CHECKOUT NOW"}
          </span>
        </button>

        <div className="secure-badge">
          <span className="lock-icon">🔒</span>
          Secure payments with SSL encryption
        </div>
      </div>
    </aside>
  );
}
export default CartSummary;
