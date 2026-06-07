import "./Cart.css";

import CartHeader from "../CartHeader/CartHeader";

function Cart() {
  return (
    <main class="cart-surface">
      <div class="cart-container">

        <CartHeader />

        <div class="cart-workspace">
          <div class="main-content-stack">
            <section class="cart-items-matrix">
              <div class="matrix-header">
                <span class="col-head">PRODUCT</span>
                <span class="col-head center">QUANTITY</span>
                <span class="col-head right">PRICE</span>
              </div>

              <article
                class="cart-node-frame"
                id="cart-item-1"
                data-price="999.00"
              >
                <div class="node-visual">
                  <div class="visual-placeholder-mesh">PRODUCT IMAGE</div>
                </div>

                <div class="node-details">
                  <span class="meta-category"> ELECTRONICS </span>
                  <h2 class="node-name">Apple AirPods Pro (2nd Gen)</h2>
                  <p class="node-spec">
                    Active Noise Cancellation // Wireless Charging Case
                  </p>

                  <button
                    class="btn-remove"
                    onclick="removeNode('cart-item-1')"
                  >
                    REMOVE
                  </button>
                </div>

                <div class="node-quantity">
                  <div class="quantity-selector">
                    <button class="btn-qty minus">−</button>
                    <input type="text" value="1" class="qty-input" readonly />
                    <button class="btn-qty plus">+</button>
                  </div>
                </div>

                <div class="node-price">
                  <span class="price-value"> $ 999.00 </span>
                </div>
              </article>

              <article
                class="cart-node-frame"
                id="cart-item-2"
                data-price="79.00"
              >
                <div class="node-visual">
                  <div class="visual-placeholder-mesh">PRODUCT IMAGE</div>
                </div>

                <div class="node-details">
                  <span class="meta-category"> FASHION </span>
                  <h2 class="node-name">Nike Everyday Hoodie</h2>
                  <p class="node-spec">Soft Cotton Fabric // Regular Fit</p>

                  <button
                    class="btn-remove"
                    onclick="removeNode('cart-item-2')"
                  >
                    REMOVE
                  </button>
                </div>

                <div class="node-quantity">
                  <div class="quantity-selector">
                    <button class="btn-qty minus">−</button>
                    <input type="text" value="2" class="qty-input" readonly />
                    <button class="btn-qty plus">+</button>
                  </div>
                </div>

                <div class="node-price">
                  <span class="price-value"> $ 158.00 </span>
                </div>
              </article>
            </section>

            <section class="checkout-forms-matrix">
              <h2 class="matrix-section-title">SHIPPING & PAYMENT</h2>

              <div class="checkout-grid">
                <div class="form-block">
                  <h3 class="form-title">SHIPPING ADDRESS</h3>

                  <div class="input-group">
                    <label>STREET ADDRESS</label>

                    <input
                      type="text"
                      class="industrial-input"
                      placeholder="ENTER YOUR ADDRESS"
                    />
                  </div>

                  <div class="input-row">
                    <div class="input-group">
                      <label>CITY</label>

                      <input
                        type="text"
                        class="industrial-input"
                        placeholder="ENTER CITY"
                      />
                    </div>

                    <div class="input-group">
                      <label>ZIP CODE</label>

                      <input
                        type="text"
                        class="industrial-input"
                        placeholder="ZIP CODE"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-block">
                  <h3 class="form-title">PAYMENT METHOD</h3>

                  <div class="input-group">
                    <label>SELECT PAYMENT OPTION</label>

                    <div class="custom-dropdown-wrapper" id="paymentWrapper">
                      <button
                        type="button"
                        class="industrial-dropdown-btn"
                        id="paymentTrigger"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span class="selected-text">Credit / Debit Card</span>
                        <span class="indicator-arrow">↓</span>
                      </button>

                      <ul
                        class="dropdown-panel"
                        id="paymentPanel"
                        role="listbox"
                      >
                        <li
                          class="dropdown-option active"
                          role="option"
                          aria-selected="true"
                          data-value="cc"
                        >
                          Credit / Debit Card
                        </li>

                        <li
                          class="dropdown-option"
                          role="option"
                          aria-selected="false"
                          data-value="paypal"
                        >
                          PayPal
                        </li>

                        <li
                          class="dropdown-option"
                          role="option"
                          aria-selected="false"
                          data-value="upi"
                        >
                          UPI Payment
                        </li>

                        <li
                          class="dropdown-option"
                          role="option"
                          aria-selected="false"
                          data-value="cod"
                        >
                          Cash on Delivery
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

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
        </div>
      </div>
    </main>
  );
}

export default Cart;
