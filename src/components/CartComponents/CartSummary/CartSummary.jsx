import "./CartSummary.css";

function CartSummary() {
  return (
    <aside className="cart-summary-panel">
      <div className="summary-card">
        <h3 className="summary-title">ORDER SUMMARY</h3>

        <div className="summary-data-grid">
          <div className="data-row">
            <span className="data-key"> SUBTOTAL </span>
            <span className="data-val" id="subtotalVal">
              $ 1,157.00
            </span>
          </div>

          <div className="data-row">
            <span className="data-key"> SHIPPING </span>
            <span className="data-val"> Free Shipping </span>
          </div>

          <div className="data-row">
            <span className="data-key"> TAX </span>
            <span className="data-val" id="taxVal">
              {" "}
              $ 92.56{" "}
            </span>
          </div>
        </div>

        <div className="summary-total-row">
          <span className="total-key"> TOTAL </span>
          <span className="total-val" id="totalVal">
            $ 1,249.56
          </span>
        </div>

        <button className="btn-primary-action" id="checkoutBtn">
          <span className="btn-text"> CHECKOUT NOW </span>
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
