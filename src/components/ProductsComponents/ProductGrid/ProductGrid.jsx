import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ productsList }) {
  return (
    <section className="product-grid">
      {productsList.map((product, idx) => (
        <ProductCard product={product} key={product.name + idx}/>
      ))}
    </section>
  );
}

export default ProductGrid;
