import { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [productCnt, setProductCnt] = useState(1);
  const [currProduct, setCurrProduct] = useState({});
  const { id } = useParams();


  useEffect(() => {
    
    (async function fetchProduct() {
      
      const response = await fetch(`http://localhost:8080/api/products/${id}`);

      if(!response.ok) {
        throw new Error("Cannot process the request");
      }

      const data = await response.json();
      console.log(data);
      setCurrProduct(data)

    })()

  }, [id])

  const {category, imageUrl, name, price, productDesc, productId, stock} = currProduct;

  const accessToken = localStorage.getItem("accessToken");

  async function handleSubmit() {
    const response = await fetch("http://localhost:8080/api/cart/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        productId: productId,
        quantity: productCnt,
      }),
    });

    if (!response.ok) {
      throw new Error("Cannot process the request");
    }

    const data = await response.json();

    console.log(data);
  }

  return (
    <main className={styles.productView}>
      <div className={styles.container}>
        <div className={styles.productGrid}>
          <div className={styles.visualColumn}>
            <span className={styles.stockBadge} id="stockBadge">
              STOCK: {stock}
            </span>

            <div className={styles.imagePlaceholder}>{imageUrl}</div>
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.mStripe}></div>

            <div className={styles.metaHeader}>
              <span className={styles.categoryLabel}> {category} </span>
            </div>

            <h1 className={styles.productName}>{name}</h1>

            <p className={styles.productPrice}>$ {Number(price).toFixed(2)}</p>

            <div className={styles.descriptionBlock}>
              <p>{productDesc}</p>
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
