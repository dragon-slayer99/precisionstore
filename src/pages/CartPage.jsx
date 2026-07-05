import { useEffect, useState } from "react";
import { getCartItems } from "../api/cartApi";
import EmptyCart from "../components/CartComponents/EmptyCart/EmptyCart";
import Cart from "../components/CartComponents/Cart/Cart";
import { CartContext } from "../utils/ContextProducer";
import Loader from "../components/HomeComponents/Loader/Loader"

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function loadCart() {
      try {
        const response = await getCartItems();
        const data = await response.json();
        if (data.items) {
          setCartItems(data.items);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, productsList, setProductsList }}
    >
      {loading ? <Loader/> : (cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      ))}
    </CartContext.Provider>
  );
}

export default CartPage;
