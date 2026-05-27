import "./OrderList.css";
import OrderCard from "../OrderCard/OrderCard";

function OrderList({ orderDetails }) {
  return (
    <div className="registry-workspace">
      {orderDetails.map((order, index) => (
        <OrderCard key={order.id || index} orderDetails={order} />
      ))}
    </div>
  );
}

export default OrderList;
