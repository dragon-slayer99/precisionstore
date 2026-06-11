import { Link } from "react-router-dom";
import "./CartItem.css";

function CartItem() {
  return (
    <article class="cart-node-frame" id="cart-item-1" data-price="999.00">
      <div class="node-visual">
        <div class="visual-placeholder-mesh">PRODUCT IMAGE</div>
      </div>

      <div class="node-details">
        <span class="meta-category"> ELECTRONICS </span>
        <h2 class="node-name">Apple AirPods Pro (2nd Gen)</h2>
        <Link class="node-spec" >
          Active Noise Cancellation // Wireless Charging Case
        </Link>

        <button class="btn-remove" onclick="removeNode('cart-item-1')">
          REMOVE
        </button>
      </div>

      <div class="node-quantity">
        <div class="quantity-selector">
          <button class="btn-qty minus">−</button>
          <input type="text" value="1" class="qty-input" readonly />
          <button class="btn-qty plus">+</button>
        </div>
      </div>

      <div class="node-price">
        <span class="price-value"> $ 999.00 </span>
      </div>
    </article>
  );
}

export default CartItem;
