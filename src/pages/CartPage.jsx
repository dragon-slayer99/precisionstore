import { useEffect, useState } from "react";
import { getCartItems } from "../api/cartApi";
import EmptyCart from "../components/CartComponents/EmptyCart/EmptyCart";
import Cart from "../components/CartComponents/Cart/Cart";
import { CartContext } from "../utils/ContextProducer";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async function loadCart() {
      const response = await getCartItems();

      const data = await response.json();
      console.log(data);

      if (data.items) {
        setCartItems(data.items);
      }
    })();

    cartItems.forEach((cartItem) => {
      (async function getProductsByCartItem() {
        const response = await fetch(
          `http://localhost:8080/api/products/${cartItem.productId}`,
        );

        if (!response.ok) return;

        const data = await response.json();

        setProductsList([...productsList, data]);
      })();
    });
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, productsList, setProductsList }}
    >
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </CartContext.Provider>
  );
}

export default CartPage;
