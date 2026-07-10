import styles from "./EmptyCart.module.css";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <main className={styles.cartMain}>
      <div className={styles.cartEmptyContainer}>
        <h1 className={styles.displayMd}>YOUR CART IS EMPTY.</h1>
        <p className={styles.bodyMd}>
          There are currently no items in your shopping cart. Explore
          high-performance parts, factory accessories, and exclusive BMW M
          motorsport lifestyle collections.
        </p>
        <Link to={"/products"} className={styles.buttonPrimary}>
          VIEW ALL PRODUCTS
        </Link>
      </div>
    </main>
  );
}

export default EmptyCart;
