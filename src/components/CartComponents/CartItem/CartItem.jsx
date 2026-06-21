import "./CartItem.css";

function CartItem({ cartItemDetails }) {

  

  return (
    <article className="cart-node-frame" id="cart-item-1" data-price="999.00">
      <div className="node-visual">
        <div className="visual-placeholder-mesh">PRODUCT IMAGE</div>
      </div>

      <div className="node-details">
        <span className="meta-category"> ELECTRONICS </span>
        <h2 className="node-name">Apple AirPods Pro (2nd Gen)</h2>
        <p className="node-spec">
          Active Noise Cancellation // Wireless Charging Case
        </p>

        <button className="btn-remove" onClick={() => (0)} >
          REMOVE
        </button>
      </div>

      <div className="node-quantity">
        <div className="quantity-selector">
          <button className="btn-qty minus">−</button>
          <input type="text" value="1" className="qty-input" readOnly />
          <button className="btn-qty plus">+</button>
        </div>
      </div>

      <div className="node-price">
        <span className="price-value"> $ 999.00 </span>
      </div>
    </article>
  );
}

export default CartItem;
