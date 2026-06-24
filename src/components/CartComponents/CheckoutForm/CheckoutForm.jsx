import { useState } from "react";

function CheckoutForm() {
  const [isToggled, setIsToggled] = useState(false);
  const [option, setOption] = useState("Credit / Debit Card");

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

            <div
              className={`custom-dropdown-wrapper ${isToggled && "active-state"}`}
              id="paymentWrapper"
            >
              <button
                type="button"
                className="industrial-dropdown-btn"
                id="paymentTrigger"
                aria-haspopup="listbox"
                aria-expanded={isToggled ? "true" : "false"}
                onClick={() => setIsToggled((prev) => !prev)}
              >
                <span className="selected-text">{option}</span>
                <span className="indicator-arrow">↓</span>
              </button>

              <ul
                className={`dropdown-panel ${isToggled && "visible-display"}`}
                id="paymentPanel"
                role="listbox"
              >
                <li
                  className="dropdown-option active"
                  role="option"
                  aria-selected={option === "Credit / Debit Card" ? "true" : "false"}
                  data-value="Credit / Debit Card"
                  onClick={() => {
                    setOption("Credit / Debit Card");
                    setIsToggled(false);
                  }}
                >
                  Credit / Debit Card
                </li>

                <li
                  className="dropdown-option"
                  role="option"
                  aria-selected={option === "paypal" ? "true" : "false"}
                  data-value="paypal"
                  onClick={() => {
                    setOption("paypal");
                    setIsToggled(false);
                  }}
                >
                  PayPal
                </li>

                <li
                  className="dropdown-option"
                  role="option"
                  aria-selected={option === "UPI Payment" ? "true" : "false"}
                  data-value="UPI Payment"
                  onClick={() => {
                    setOption("UPI Payment");
                    setIsToggled(false);
                  }}
                >
                  UPI Payment
                </li>

                <li
                  className="dropdown-option"
                  role="option"
                  aria-selected={option === "Cash on Delivery" ? "true" : "false"}
                  data-value="Cash on Delivery"
                  onClick={() => {
                    setOption("Cash on Delivery");
                    setIsToggled(false);
                  }}
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
