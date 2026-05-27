import "./ProfileOrderCard.css";

function OrderCard() {
  return (
    <article class="order-card active-dispatch">
      <div class="order-header">
        <span class="order-id"> ORDER #PX8821 </span>

        <span class="order-status blinking-indicator"> SHIPPED </span>
      </div>

      <div class="order-specs">
        <p>3 ITEMS // TOTAL: $1,620.00</p>

        <p>ESTIMATED DELIVERY: MAY 18, 2026</p>
      </div>

      <button class="btn-ghost-primary order-btn tracking-toggle">
        TRACK ORDER
      </button>

      <div class="tracking-drawer" id="drawer-mx88">
        <div class="tracking-timeline">
          <div class="timeline-step passed">ORDER CONFIRMED</div>

          <div class="timeline-step passed">SHIPPED FROM WAREHOUSE</div>

          <div class="timeline-step active">OUT FOR DELIVERY</div>
        </div>
      </div>
    </article>
  );
}

export default OrderCard;
