import "./ProductCard.css";

function ProductCard({ product }) {
  const { image, name, category, price, description, badge } = product;

  return (
    <article className="product-card">
      <div className="product-visual">
        {badge && (
          <span
            className={
              badge === "LOW STOCK"
                ? "badge alert"
                : badge === "NEW"
                  ? "badge new"
                  : badge === "BESTSELLER"
                    ? "badge bestseller"
                    : "badge"
            }
          >
            {badge}
          </span>
        )}

        <div className="visual-placeholder">{image}</div>
      </div>

      <div className="product-meta">
        <div className="meta-top">
          <span className="product-category">{category}</span>

          <span className="product-price">${price.toFixed(2)}</span>
        </div>

        <h2 className="product-name">{name}</h2>

        <p className="product-description">{description}</p>

        <a className="btn-ghost-primary product-action"> VIEW PRODUCT </a>
      </div>
    </article>
  );
}

export default ProductCard;
