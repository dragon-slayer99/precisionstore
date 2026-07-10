import styles from "../Products/Products.module.css";

function Pagination() {
  return (
    <div className={styles.pagination}>
      <button className={`${styles.btnPage} ${styles.active}`}>1</button>

      <button className={styles.btnPage}>2</button>

      <button className={styles.btnPage}>3</button>

      <span className={styles.pageDivider}> ... </span>

      <button className={styles.btnPageNext}>
        NEXT
        <span className={styles.arrow}>→</span>
      </button>
    </div>
  );
}

export default Pagination;
