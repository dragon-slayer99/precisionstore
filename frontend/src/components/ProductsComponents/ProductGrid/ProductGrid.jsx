import styles from "../Products/Products.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { ProductDetailsContext } from "../../../utils/contextProducer";

function ProductGrid() {

  const productsList = useContext(ProductDetailsContext);
  return (
    <section className={styles.productGrid}>
      {productsList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}

export default ProductGrid;
