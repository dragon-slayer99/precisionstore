function CheckoutForm() {
    return (
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
    )
}
export default CheckoutForm