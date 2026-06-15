import { useContext, useState } from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { ProductDetailsContext } from "../../../utils/ContextProducer";

function ProductDetails() {
  const [productCnt, setProductCnt] = useState(1);
  const { id } = useParams();


  const productList = useContext(ProductDetailsContext);

  const { productImage, name, category, price, productDescription, stock } = productList.filter((product) => (product.id === Number(id)))[0];

  return (
    <main className={styles.productView}>
      <div className={styles.container}>
        <div className={styles.productGrid}>
          <div className={styles.visualColumn}>
            <span className={styles.stockBadge} id="stockBadge">STOCK: {stock}</span>

            <div className={styles.imagePlaceholder}>{productImage}</div>
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.mStripe}></div>

            <div className={styles.metaHeader}>
              <span className={styles.categoryLabel}> {category} </span>
            </div>

            <h1 className={styles.productName}>{name}</h1>

            <p className={styles.productPrice}>$ {price.toFixed(2)}</p>

            <div className={styles.descriptionBlock}>
              <p>
                {productDescription}
              </p>
            </div>

            <div className={styles.transactionRow}>
              <div className={styles.quantitySelector}>
                <button className={styles.btnQty} id="qtyMinus" onClick={() => setProductCnt(productCnt => productCnt - 1)}>−</button>

                <input
                  type="text"
                  value={productCnt}
                  className={styles.qtyInput}
                  id="qtyInput"
                  readOnly
                />

                <button className={styles.btnQty} id="qtyPlus" onClick={() => setProductCnt(productCnt => productCnt + 1)}>+</button>
              </div>

              <button className={styles.btnPrimary} id="addToCartBtn">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
