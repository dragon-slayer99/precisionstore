import { useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [productCnt, setProductCnt] = useState(1);
  const { id } = useParams();

  console.log(id);

  const productDetails = {
    image: "PRODUCT_01",
    name: "CHRONO CLASSIC WATCH",
    category: "ACCESSORIES",
    price: 450.0,
    stock: 18,
    description:
      "Minimal stainless steel timepiece designed for everyday wear with premium craftsmanship and water-resistant construction.",
    badge: "NEW",
  };

  return (
    <main className="product-view">
      <div className="container">
        <div className="product-grid">
          <div className="visual-column">
            <span className="stock-badge" id="stockBadge">
              STOCK: {productDetails.stock}
            </span>

            <div className="image-placeholder">{productDetails.image}</div>
          </div>

          <div className="details-column">
            <div className="m-stripe"></div>

            <div className="meta-header">
              <span className="category-label">
                {" "}
                {productDetails.category}{" "}
              </span>
            </div>

            <h1 className="product-name">{productDetails.name}</h1>

            <p className="product-price">$ {productDetails.price.toFixed(2)}</p>

            <div className="description-block">
              <p>{productDetails.description}</p>
            </div>

            <div className="transaction-row">
              <div className="quantity-selector">
                <button className="btn-qty" id="qtyMinus" onClick={() => setProductCnt((productCnt) => Math.max(1, productCnt - 1))}>
                  −
                </button>

                <input
                  type="text"
                  value={productCnt}
                  className="qty-input"
                  id="qtyInput"
                  readonly
                />

                <button className="btn-qty" id="qtyPlus" onClick={() => setProductCnt((productCnt) => Math.min(10, productCnt + 1))}>
                  +
                </button>
              </div>

              <button className="btn-primary" id="addToCartBtn">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
