import "./OrderCard.css";

function OrderCard({ order }) {
  const { id, message, deliveryStatus, orderedDate, address, paymentType };

  return (
    <article className="order-card active-dispatch">
      <div className="order-header">
        <span className="order-id"> ORDER #PX8{id} </span>

        <span className="order-status blinking-indicator"> {deliveryStatus} </span>
      </div>

      <div className="order-specs">
        <p>3 ITEMS // TOTAL: $1,620.00</p>

        <p>ESTIMATED DELIVERY: MAY 18, 2026</p>
      </div>

      <button className="btn-ghost-primary order-btn tracking-toggle">
        TRACK ORDER
      </button>

      <div className="tracking-drawer" id="drawer-mx88">
        <div className="tracking-timeline">
          <div className="timeline-step passed">ORDER CONFIRMED</div>

          <div className="timeline-step passed">SHIPPED FROM WAREHOUSE</div>

          <div className="timeline-step active">OUT FOR DELIVERY</div>
        </div>
      </div>
    </article>
  );
}

export default OrderCard;
