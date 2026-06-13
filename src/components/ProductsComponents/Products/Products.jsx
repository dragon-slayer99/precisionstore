import styles from "./Products.module.css"
import CatalogHeader from "../CatalogHeader/CatalogHeader";
import ProductGrid from "../ProductGrid/ProductGrid";
import CatalogToolBar from "../CatalogToolBar/CatalogToolBar";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";



function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [sortOrder, setSortOrder] = useState("");


  return (

    
      <main className={styles.ecomCatalog}>
        <div className={styles.catalogContainer}>
          <CatalogHeader activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* <!-- TOOLBAR --> */}

          <CatalogToolBar
            setSortOrder={setSortOrder}
          />

          {/* <!-- PRODUCTS --> */}

          <ProductGrid/>

          {/* <!-- PAGINATION --> */}

          <Pagination />
        </div>
      </main>
  );
}

export default Products;
