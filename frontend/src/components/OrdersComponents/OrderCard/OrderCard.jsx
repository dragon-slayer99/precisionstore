import { useContext } from "react";
import "./OrderCard.css";
import { ProductDetailsContext } from "../../../utils/ContextProducer";

function  OrderCard({ orderDetails }) {
  const {
    orderItemDTOList,
    deliveryStatus,
    orderedDate,
    address,
    paymentType,
  } = orderDetails;

  let orderId = orderItemDTOList[0]?.orderId;

  return (
    <article className="order-block" data-status="ACTIVE">
      <header className="order-telemetry">
        <div className="telemetry-group">
          <span className="telemetry-label">ORDER ID</span>

          <span className="telemetry-value">ORD-2026-{orderId}</span>
        </div>

        <div className="telemetry-group">
          <span className="telemetry-label">ORDER DATE</span>

          <span className="telemetry-value">{orderedDate}</span>
        </div>

        <div className="telemetry-group">
          <span className="telemetry-label">TOTAL</span>

          <span className="telemetry-value">
            $ {orderItemDTOList.reduce(
              (total, item) => total + item.purchasedPrice,
              0
            ).toFixed(2)}
          </span>
        </div>

        <div className="telemetry-group status-group">
          <span
            className={
              deliveryStatus === "DELIVERED"
                ? "status-indicator muted-status"
                : deliveryStatus === "RETURNED"
                  ? "status-indicator alert-status"
                  : "status-indicator active-transit"
            }
          >
            {deliveryStatus.toUpperCase()}
          </span>
        </div>
      </header>

      <div className="order-manifest">
        {orderItemDTOList.map((orderItem) => (
          <OrderCardItem orderItemDetails={orderItem} />
        ))}
      </div>

      <footer className="order-actions">
        {deliveryStatus === "RETURNED" ? (
          <>
            <button className="btn-ghost-secondary">VIEW RETURN DETAILS</button>
          </>
        ) : deliveryStatus === "DELIVERED" ? (
          <>
            <button className="btn-ghost-secondary">DOWNLOAD INVOICE</button>
            <button className="btn-ghost-secondary">RETURN ITEM</button>
          </>
        ) : (
          ["PROCESSING", "IN_TRANSIT", "SHIPPED"].includes(deliveryStatus) && (
            <>
              <button className="btn-ghost-primary">TRACK ORDER</button>
              <button className="btn-ghost-secondary">VIEW DETAILS</button>
            </>
          )
        )}
      </footer>
    </article>
  );
}

function OrderCardItem({ orderItemDetails }) {
  const { productId, orderId, quantity, purchasedPrice } = orderItemDetails;
  const productDetails = useContext(ProductDetailsContext);

  const product = productDetails.find((product) => product.id === productId);

  return (
    <div className="manifest-item">
      <div className="item-visual">
        <div className="visual-placeholder-mesh">PRODUCT_IMAGE</div>
      </div>

      <div className="item-details">
        <h3 className="item-name">{product.name}</h3>

        <p className="item-spec">Quantity: 0{quantity} // {product.category}</p>
      </div>

      <div className="item-price">$ {Number(purchasedPrice).toFixed(2)}</div>
    </div>
  );
}

export default OrderCard;
