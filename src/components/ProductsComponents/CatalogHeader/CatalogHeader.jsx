import styles from "../Products/Products.module.css";
import CatalogTabs from "../CatalogTabs/CatalogTabs";

function CatalogHeader({ activeTab, setActiveTab }) {
  const tabs = ["ALL PRODUCTS", "CLOTHING", "BAGS", "ACCESSORIES"];

  return (
    <header className={styles.catalogHeader}>
      <div className={styles.breadcrumbs}>
        <a href="#">HOME</a>
        <span className={styles.separator}>/</span>
        <span className={styles.current}>SHOP</span>
      </div>

      <h1 className={styles.catalogTitle}>MODERN ESSENTIALS</h1>

      <CatalogTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </header>
  );
}

export default CatalogHeader;
