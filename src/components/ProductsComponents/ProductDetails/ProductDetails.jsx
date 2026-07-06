import { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

import { useToast } from "../../../hooks/useToast";
import { postCartItems } from "../../../api/cartApi";
import { getProducts } from "../../../api/productApi";

function ProductDetails() {
  const [productCnt, setProductCnt] = useState(1);
  const [currProduct, setCurrProduct] = useState({});
  const { id } = useParams();
  const { showToast } = useToast();

  useEffect(() => {
    (async function fetchProduct() {
      const data = await getProducts(id);
      setCurrProduct(data);
    })();
  }, [id]);

  const {
    category,
    productImage,
    name,
    price,
    productDescription,
    productId,
    stock,
  } = currProduct;

  async function handleSubmit() {
    const response = await postCartItems(productId, productCnt);

    console.log(response);

    if (response.status === 401) {
      showToast("Access denied", "Please try to login again");
    }

    if (response.ok) {
      showToast("Status", "Product added to cart");
    }
  }

  return (
    <main className={styles.productView}>
      <div className={styles.container}>
        <div className={styles.productGrid}>
          <div className={styles.visualColumn}>
            <span className={styles.stockBadge} id="stockBadge">
              STOCK: {stock}
            </span>

            <div className={styles.imagePlaceholder}>{productImage}</div>
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.mStripe}></div>

            <div className={styles.metaHeader}>
              <span className={styles.categoryLabel}> {category} </span>
            </div>

            <h1 className={styles.productName}>{name}</h1>

            <p className={styles.productPrice}>$ {Number(price).toFixed(2)}</p>

            <div className={styles.descriptionBlock}>
              <p>{productDescription}</p>
            </div>

            <div className={styles.transactionRow} onSubmit={handleSubmit}>
              <div className={styles.quantitySelector}>
                <button
                  className={styles.btnQty}
                  id="qtyMinus"
                  onClick={() => setProductCnt((productCnt) => productCnt - 1)}
                >
                  −
                </button>

                <input
                  type="text"
                  value={productCnt}
                  className={styles.qtyInput}
                  id="qtyInput"
                  readOnly
                />

                <button
                  className={styles.btnQty}
                  id="qtyPlus"
                  onClick={() => setProductCnt((productCnt) => productCnt + 1)}
                >
                  +
                </button>
              </div>

              <button
                className={styles.btnPrimary}
                id="addToCartBtn"
                onClick={handleSubmit}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
