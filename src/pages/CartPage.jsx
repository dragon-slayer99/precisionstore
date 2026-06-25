import { useEffect, useState } from "react";
import { getCartItems } from "../api/cartApi";
import EmptyCart from "../components/CartComponents/EmptyCart/EmptyCart";
import Cart from "../components/CartComponents/Cart/Cart";
import { CartContext } from "../utils/ContextProducer";


function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async function loadCart() {
      const response = await getCartItems();

      const data = await response.json();
      console.log(data);

      if (data.items) {
        setCartItems(data.items);
      }
    })();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </CartContext.Provider>
  );
}

export default CartPage;
