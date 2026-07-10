import styles from "../Products/Products.module.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useContext } from "react";
import { ProductDetailsContext } from "../../../utils/contextProducer";

function CatalogToolBar({ setSortOrder }) {
  const optionsList = [
    { text: "FEATURED", value: "FEATURED" },
    { text: "LOW TO HIGH", value: "PRICE_LTOH" },
    { text: "HIGH TO LOW", value: "PRICE_HTOL" },
    { text: "NEW ARRIVALS", value: "NEWEST" },
  ];

  const productsList = useContext(ProductDetailsContext);

  return (
    <div className={styles.catalogToolbar}>
      <span className={styles.resultsCount}> {productsList.length} PRODUCTS </span>

      <div className={styles.toolbarActions}>

        <DropdownMenu optionsList={optionsList} />

      </div>
    </div>
  );
}

export default CatalogToolBar;
