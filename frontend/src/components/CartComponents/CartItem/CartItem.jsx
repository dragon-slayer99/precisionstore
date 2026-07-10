import "./CartItem.css";
import { deleteCartItem, updateCartItemQuantity } from "../../../api/cartApi";
import { useContext, useState } from "react";
import { CartContext } from "../../../utils/contextProducer";

function CartItem({ cartItemDetails }) {
  const { id, productId, quantity } = cartItemDetails;

  const { cartItems, setCartItems, productsList } = useContext(CartContext);
  // const [product, setProduct] = useState({});

  console.log(productsList);

  async function handleCartItemDeletion() {
    const response = await deleteCartItem(id);

    if (response.ok) {
      const newCartItems = cartItems.filter((cartItem) => cartItem.id != id);
      setCartItems(newCartItems);
    }
  }

  async function handleCartItemQuantity(quantity) {
    const response = await updateCartItemQuantity(id, quantity);

    if (response.ok) {
      const newCartItems = cartItems.flatMap((cartItem) => {
        if (cartItem.id !== id) return [cartItem];

        if (quantity <= 0) return [];

        return [{ ...cartItem, quantity: quantity }];
      });

      console.log("cartItems =>", newCartItems);
      setCartItems(newCartItems);
    }
  }

  const product = productsList.find((product) => product.id === productId);

  const { category, productImage, name, price, productDescription } = product;

  return (
    <article className="cart-node-frame" id="cart-item-1" data-price="999.00">
      <div className="node-visual">
        <div className="visual-placeholder-mesh">{productImage}</div>
      </div>

      <div className="node-details">
        <span className="meta-category"> {category} </span>
        <h2 className="node-name">{name}</h2>
        <p className="node-spec">{productDescription}</p>

        <button className="btn-remove" onClick={handleCartItemDeletion}>
          REMOVE
        </button>
      </div>

      <div className="node-quantity">
        <div className="quantity-selector">
          <button
            className="btn-qty minus"
            onClick={() => handleCartItemQuantity(quantity - 1)}
          >
            −
          </button>
          <input type="text" value={quantity} className="qty-input" readOnly />
          <button
            className="btn-qty plus"
            onClick={() => handleCartItemQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="node-price">
        <span className="price-value">
          $ {Number(price * quantity).toFixed(2)}
        </span>
      </div>
    </article>
  );
}

export default CartItem;
