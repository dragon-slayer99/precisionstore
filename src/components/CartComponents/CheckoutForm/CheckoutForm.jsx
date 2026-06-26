import { useState } from "react";

function CheckoutForm() {
  const [isToggled, setIsToggled] = useState(false);
  const [userDeliveryDetails, setUserDeliveryDetails] = useState({
    street_address: "",
    city: "",
    ZIP_code: "",
    paymentMethod: ""
  });

  console.log(userDeliveryDetails)

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
              value={userDeliveryDetails.street_address}
              onChange={(e) => setUserDeliveryDetails({...userDeliveryDetails, street_address: e.target.value})}
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>CITY</label>

              <input
                type="text"
                className="industrial-input"
                placeholder="ENTER CITY"
                value={userDeliveryDetails.city}
                onChange={(e) => setUserDeliveryDetails({...userDeliveryDetails, city: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>ZIP CODE</label>

              <input
                type="text"
                className="industrial-input"
                placeholder="ZIP CODE"
                value={userDeliveryDetails.ZIP_code}
                onChange={(e) => setUserDeliveryDetails({...userDeliveryDetails, ZIP_code: e.target.value})}
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
                <span className="selected-text">{userDeliveryDetails.paymentMethod}</span>
                <span className="indicator-arrow">↓</span>
              </button>

              <ul
                className={`dropdown-panel ${isToggled && "visible-display"}`}
                id="paymentPanel"
                role="listbox"
              >
                <li
                  className={`dropdown-option ${userDeliveryDetails.paymentMethod === "Credit / Debit Card" && "active"}`}
                  role="option"
                  aria-selected={
                    userDeliveryDetails.paymentMethod === "Credit / Debit Card" ? "true" : "false"
                  }
                  data-value="Credit / Debit Card"
                  onClick={() => {
                    setUserDeliveryDetails(() => ({...userDeliveryDetails, paymentMethod: "Credit / Debit Card"}));
                    setIsToggled(false);
                  }}
                >
                  Credit / Debit Card
                </li>

                <li
                  className={`dropdown-option ${userDeliveryDetails.paymentMethod === "paypal" && "active"}`}
                  role="option"
                  aria-selected={userDeliveryDetails.paymentMethod === "paypal" ? "true" : "false"}
                  data-value="paypal"
                  onClick={() => {
                    setUserDeliveryDetails(() => ({...userDeliveryDetails, paymentMethod: "paypal"}));
                    setIsToggled(false);
                  }}
                >
                  PayPal
                </li>

                <li
                  className={`dropdown-option ${userDeliveryDetails.paymentMethod === "UPI Payment" && "active"}`}
                  role="option"
                  aria-selected={userDeliveryDetails.paymentMethod === "UPI Payment" ? "true" : "false"}
                  data-value="UPI Payment"
                  onClick={() => {
                    setUserDeliveryDetails(() => ({...userDeliveryDetails, paymentMethod: "UPI Payment"}));
                    setIsToggled(false);
                  }}
                >
                  UPI Payment
                </li>

                <li
                  className={`dropdown-option ${userDeliveryDetails.paymentMethod === "Cash on Delivery" && "active"}`}
                  role="option"
                  aria-selected={
                    userDeliveryDetails.paymentMethod === "Cash on Delivery" ? "true" : "false"
                  }
                  data-value="Cash on Delivery"
                  onClick={() => {
                    setUserDeliveryDetails(() => ({...userDeliveryDetails, paymentMethod: "Cash on Delivery"}));
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
