import styles from "../Profile/Profile.module.css";
import ProfileOrderCard from "../ProfileOrderCard/ProfileOrderCard";

function OrderSection() {
  const mockOrders = [
    {
      id: 1001,
      message: "Order fetched successfully",
      deliveryStatus: "SHIPPED",
      orderedDate: "2026-05-23T14:35:00",
      address:
        "VECTOR BUILDING, FLOORS 4-6, 100 INDUSTRIAL PARKWAY, AUSTIN, TX 78701",
      paymentType: "CREDIT_CARD",
      orderItemDTOList: [
        {
          productId: 1,
          orderId: 1001,
          quantity: 2,
          purchasedPrice: 450.0,
        },
        {
          productId: 8,
          orderId: 1001,
          quantity: 1,
          purchasedPrice: 620.0,
        },
        {
          productId: 11,
          orderId: 1001,
          quantity: 1,
          purchasedPrice: 680.0,
        },
      ],
    },
    {
      id: 1002,
      message: "Order fetched successfully",
      deliveryStatus: "DELIVERED",
      orderedDate: "2026-04-19T09:10:00",
      address: "221B BAKER STREET, LONDON, UK",
      paymentType: "PAYPAL",
      orderItemDTOList: [
        {
          productId: 3,
          orderId: 1002,
          quantity: 1,
          purchasedPrice: 890.0,
        },
        {
          productId: 21,
          orderId: 1002,
          quantity: 2,
          purchasedPrice: 110.0,
        },
        {
          productId: 16,
          orderId: 1002,
          quantity: 4,
          purchasedPrice: 45.0,
        },
      ],
    },
    {
      id: 1003,
      message: "Order fetched successfully",
      deliveryStatus: "PROCESSING",
      orderedDate: "2026-05-20T11:45:00",
      address: "742 EVERGREEN TERRACE, SPRINGFIELD, USA",
      paymentType: "DEBIT_CARD",
      orderItemDTOList: [
        {
          productId: 4,
          orderId: 1003,
          quantity: 1,
          purchasedPrice: 320.0,
        },
        {
          productId: 10,
          orderId: 1003,
          quantity: 3,
          purchasedPrice: 120.0,
        },
        {
          productId: 22,
          orderId: 1003,
          quantity: 1,
          purchasedPrice: 540.0,
        },
      ],
    },
    {
      id: 1004,
      message: "Order fetched successfully",
      deliveryStatus: "OUT_FOR_DELIVERY",
      orderedDate: "2026-05-21T16:20:00",
      address: "18 PARK AVENUE, NEW YORK, NY 10016",
      paymentType: "UPI",
      orderItemDTOList: [
        {
          productId: 17,
          orderId: 1004,
          quantity: 1,
          purchasedPrice: 560.0,
        },
        {
          productId: 24,
          orderId: 1004,
          quantity: 2,
          purchasedPrice: 145.0,
        },
        {
          productId: 15,
          orderId: 1004,
          quantity: 1,
          purchasedPrice: 130.0,
        },
        {
          productId: 12,
          orderId: 1004,
          quantity: 1,
          purchasedPrice: 340.0,
        },
      ],
    },
    {
      id: 1005,
      message: "Order fetched successfully",
      deliveryStatus: "CANCELLED",
      orderedDate: "2026-03-28T08:00:00",
      address: "44 SUNSET BOULEVARD, LOS ANGELES, CA 90028",
      paymentType: "NET_BANKING",
      orderItemDTOList: [
        {
          productId: 6,
          orderId: 1005,
          quantity: 1,
          purchasedPrice: 740.0,
        },
        {
          productId: 19,
          orderId: 1005,
          quantity: 1,
          purchasedPrice: 460.0,
        },
      ],
    },
    {
      id: 1006,
      message: "Order fetched successfully",
      deliveryStatus: "DELIVERED",
      orderedDate: "2026-02-14T19:30:00",
      address: "99 OXFORD STREET, MANCHESTER, UK",
      paymentType: "CASH_ON_DELIVERY",
      orderItemDTOList: [
        {
          productId: 2,
          orderId: 1006,
          quantity: 1,
          purchasedPrice: 280.0,
        },
        {
          productId: 7,
          orderId: 1006,
          quantity: 1,
          purchasedPrice: 510.0,
        },
        {
          productId: 18,
          orderId: 1006,
          quantity: 2,
          purchasedPrice: 390.0,
        },
        {
          productId: 25,
          orderId: 1006,
          quantity: 1,
          purchasedPrice: 260.0,
        },
      ],
    },
  ];

  return (
    <section className={`${styles.gridPanel} ${styles.telemetryLog}`}>
      <h2 className={styles.panelHeading}>RECENT ORDERS</h2>

      <div className={styles.ordersLog}>
        {/* <!-- ACTIVE ORDER --> */}

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

        {/* <!-- DELIVERED ORDER --> */}

        <article className={styles.orderCard}>
          <div className={styles.orderHeader}>
            <span className={styles.orderId}> ORDER #QL0401 </span>

            <span className={`${styles.orderStatus} ${styles.muted}`}> DELIVERED </span>
          </div>

          <div className={styles.orderSpecs}>
            <p>1 ITEM // TOTAL: $450.00</p>

            <p>DELIVERED ON APRIL 19, 2026</p>
          </div>

          <button className={`${styles.btnGhostSecondary} ${styles.orderBtn}`}>VIEW ORDER</button>
        </article>

        <ProfileOrderCard />
      </div>
    </section>
  );
}

export default OrderSection;
