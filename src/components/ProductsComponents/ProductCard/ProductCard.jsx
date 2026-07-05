import { Link } from "react-router-dom";
import styles from "../Products/Products.module.css";
import { useToast } from "../../../hooks/useToast";
import { postCartItems } from "../../../api/cartApi"

function ProductCard({ product }) {
  const { id, productImage, name, category, price, productDescription, stock } = product;

  const getBadgeClass = () => {
    if (stock <= 25) return { status: "LOW STOCK", classname: `${styles.badge} ${styles.alert}` };
    if (stock >= 100) return { status: "NEW", classname: `${styles.badge} ${styles.new}` };
    if (stock >= 50 && stock <= 75) return { status: "BEST SELLER", classname: `${styles.badge} ${styles.bestseller}` };
    return { status: null, classname: styles.badge };
  };

  const { showToast } = useToast();

  async function handleCartItemPlacement() {
    const response = await postCartItems(id, 1);

    console.log(response);

    if (response.status === 401) {
      showToast("Access denied", "Please try to login again");
    }

    if (response.ok) {
      showToast("Status", "Product added to cart");
    }
  }

  return (
    <article className={styles.productCard}>
      <div className={styles.productVisual}>
        {getBadgeClass().status && (
          <span className={getBadgeClass().classname}>
            {getBadgeClass().status}
          </span>
        )}

        <div className={styles.visualPlaceholder}>{productImage}</div>
      </div>

      <div className={styles.productMeta}>
        <div className={styles.metaTop}>
          <span className={styles.productCategory}>{category}</span>

          <span className={styles.productPrice}>${price.toFixed(2)}</span>
        </div>

        <h2 className={styles.productName}>{name}</h2>

        <p className={styles.productDescription}>{productDescription}</p>

        <div className={styles.productActionsContainer}>
          <Link className={`${styles.btnGhostPrimary} ${styles.productAction}`} to={`/products/${id}`}> VIEW PRODUCT </Link>
          <button type="button" className={`${styles.btnGhostPrimary} ${styles.productAction}`} onClick={handleCartItemPlacement}>
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
