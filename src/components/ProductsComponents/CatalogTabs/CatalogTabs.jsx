import styles from "../Products/Products.module.css";

function CatalogTabs({ activeTab, setActiveTab }) {
  const tabs = ["ALL PRODUCTS", "CLOTHING", "BAGS", "ACCESSORIES"];
  return (
    <div className={styles.categoryTabs}>
      {tabs.map((tab, idx) => (
        <button
          className={activeTab === idx ? `${styles.tab} ${styles.active}` : styles.tab}
          onClick={() => setActiveTab(idx)}
          key={tab}
        >

          {tab}

          {activeTab === idx && <div className={styles.activeStripe}></div>}
        </button>
      ))}
    </div>
  );
}

export default CatalogTabs;
