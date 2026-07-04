import "./Cart.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartHeader from "../CartHeader/CartHeader";
import CartItems from "../CartItems/CartItems";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartSummary from "../CartSummary/CartSummary";

import { CartContext } from "../../../utils/ContextProducer";
import { placeOrder } from "../../../api/orderApi";
import { useToast } from "../../../hooks/useToast";

function Cart() {
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const {showToast} = useToast();

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [userDeliveryDetails, setUserDeliveryDetails] = useState({
    street_address: "",
    city: "",
    ZIP_code: "",
    paymentMethod: "",
  });

  async function handlePlaceOrder() {
    const { street_address, city, ZIP_code, paymentMethod } =
      userDeliveryDetails;

    if (!street_address || !city || !ZIP_code || !paymentMethod) {
      showToast("Validation Error", "Please fill in all shipping and payment details.", "error", 3000);
      return;
    }

    setIsPlacingOrder(true);

    try {
      const data = await placeOrder(userDeliveryDetails);

      if (data.message) {
        showToast("Order Placed", data.message, "success", 3000);
        setCartItems([]);
        navigate("/orders");
      } else {
        showToast("Order Placed", "Your order has been placed successfully!", "success", 3000);
        setCartItems([]);
        navigate("/orders");
      }
    } catch (error) {
      console.error("Order placement failed:", error);
      showToast("Order Failed", "Something went wrong. Please try again.", "error", 3000);
      setIsPlacingOrder(false);
    }
  }

  return (
    <>
      <main className="cart-surface">
        <div className="cart-container">
          <CartHeader />

          <div className="cart-workspace">
            <div className="main-content-stack">
              <CartItems />

              <CheckoutForm
                userDeliveryDetails={userDeliveryDetails}
                setUserDeliveryDetails={setUserDeliveryDetails}
              />
            </div>

            <CartSummary
              onPlaceOrder={handlePlaceOrder}
              isPlacingOrder={isPlacingOrder}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
