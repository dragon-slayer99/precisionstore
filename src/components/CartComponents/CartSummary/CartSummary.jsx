import './CartSummary.css'

function CartSummary() {
    return (
        <aside class="cart-summary-panel">
            <div class="summary-card">
                <h3 class="summary-title">ORDER SUMMARY</h3>

                <div class="summary-data-grid">
                    <div class="data-row">
                        <span class="data-key"> SUBTOTAL </span>
                        <span class="data-val" id="subtotalVal">
                            $ 1,157.00
                        </span>
                    </div>

                    <div class="data-row">
                        <span class="data-key"> SHIPPING </span>
                        <span class="data-val"> Free Shipping </span>
                    </div>

                    <div class="data-row">
                        <span class="data-key"> TAX </span>
                        <span class="data-val" id="taxVal">
                            {" "}
                            $ 92.56{" "}
                        </span>
                    </div>
                </div>

                <div class="summary-total-row">
                    <span class="total-key"> TOTAL </span>
                    <span class="total-val" id="totalVal">
                        $ 1,249.56
                    </span>
                </div>

                <button class="btn-primary-action" id="checkoutBtn">
                    <span class="btn-text"> CHECKOUT NOW </span>
                </button>

                <div class="secure-badge">
                    <span class="lock-icon">🔒</span>
                    Secure payments with SSL encryption
                </div>
            </div>
        </aside>

    )
}
export default CartSummary