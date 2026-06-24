import { useEffect, useState } from "react";
import { getCartItems } from "../api/cartApi";
import { useToast } from "../hooks/useToast";
import EmptyCart from "../components/CartComponents/EmptyCart/EmptyCart";
import Cart from "../components/CartComponents/Cart/Cart";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const { showToast } = useToast();

  useEffect(() => {
    (async function loadCart() {
      const response = await getCartItems();

      if (response.status === 401) {
        showToast("Access denied", "Please login again");
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data.items) {
        setCartItems(data.items);
      }
    })();
  }, [showToast]);

  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </>
  );
}

export default CartPage;
