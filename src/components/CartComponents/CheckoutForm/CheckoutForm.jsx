function CheckoutForm() {
  return (
    <section className="checkout-forms-matrix">
      <h2 className="matrix-section-title">SHIPPING & PAYMENT</h2>

      <div className="checkout-grid">
        <div className="form-block">
          <h3 className="form-title">SHIPPING ADDRESS</h3>

          <div className="input-group">
            <label>STREET ADDRESS</label>

            <input
              type="text"
              className="industrial-input"
              placeholder="ENTER YOUR ADDRESS"
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>CITY</label>

              <input
                type="text"
                className="industrial-input"
                placeholder="ENTER CITY"
              />
            </div>

            <div className="input-group">
              <label>ZIP CODE</label>

              <input
                type="text"
                className="industrial-input"
                placeholder="ZIP CODE"
              />
            </div>
          </div>
        </div>

        <div className="form-block">
          <h3 className="form-title">PAYMENT METHOD</h3>

          <div className="input-group">
            <label>SELECT PAYMENT OPTION</label>

            <div className="custom-dropdown-wrapper" id="paymentWrapper">
              <button
                type="button"
                className="industrial-dropdown-btn"
                id="paymentTrigger"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span className="selected-text">Credit / Debit Card</span>
                <span className="indicator-arrow">↓</span>
              </button>

              <ul className="dropdown-panel" id="paymentPanel" role="listbox">
                <li
                  className="dropdown-option active"
                  role="option"
                  aria-selected="true"
                  data-value="cc"
                >
                  Credit / Debit Card
                </li>

                <li
                  className="dropdown-option"
                  role="option"
                  aria-selected="false"
                  data-value="paypal"
                >
                  PayPal
                </li>

                <li
                  className="dropdown-option"
                  role="option"
                  aria-selected="false"
                  data-value="upi"
                >
                  UPI Payment
                </li>

                <li
                  className="dropdown-option"
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
  );
}
export default CheckoutForm;
