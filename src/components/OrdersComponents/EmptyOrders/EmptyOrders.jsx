import { Link } from "react-router-dom";
import styles from "./Empty.module.css";

function EmptyOrders() {
  return (
    <main className={styles.ordersMain}>
      <div className={styles.ordersEmptyContainer}>
        <h1 className={styles.displayMd}>NO ORDER HISTORY.</h1>
        <p className={styles.bodyMd}>
          You have not placed any orders yet. Discover high-performance parts,
          exclusive factory accessories, and the latest BMW M motorsport
          lifestyle collections.
        </p>
        <div className={styles.buttonGroup}>
          <Link to={"/products"} className={styles.buttonPrimary}>
            EXPLORE M PRODUCTS
          </Link>
          <Link to={"/profile"} className={styles.buttonPrimaryOutline}>
            RETURN TO PROFILE
          </Link>
        </div>
      </div>
    </main>
  );
}

export default EmptyOrders;
