import styles from "../Profile/Profile.module.css";

function OrderCard() {
  return (
    <article className={`${styles.orderCard} ${styles.activeDispatch}`}>
      <div className={styles.orderHeader}>
        <span className={styles.orderId}> ORDER #PX8821 </span>

        <span className={`${styles.orderStatus} ${styles.blinkingIndicator}`}> SHIPPED </span>
      </div>

      <div className={styles.orderSpecs}>
        <p>3 ITEMS // TOTAL: $1,620.00</p>

        <p>ESTIMATED DELIVERY: MAY 18, 2026</p>
      </div>

      <button className={`${styles.btnGhostPrimary} ${styles.orderBtn} tracking-toggle`}>
        TRACK ORDER
      </button>

      <div className={styles.trackingDrawer} id="drawer-mx88">
        <div className={styles.trackingTimeline}>
          <div className={`${styles.timelineStep} ${styles.passed}`}>ORDER CONFIRMED</div>

          <div className={`${styles.timelineStep} ${styles.passed}`}>SHIPPED FROM WAREHOUSE</div>

          <div className={`${styles.timelineStep} ${styles.active}`}>OUT FOR DELIVERY</div>
        </div>
      </div>
    </article>
  );
}

export default OrderCard;
