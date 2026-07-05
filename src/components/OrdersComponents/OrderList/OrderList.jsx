import "./OrderList.css";
import OrderCard from "../OrderCard/OrderCard";

function OrderList({ orderDetails }) {
  return (
    <div className="registry-workspace">
      {orderDetails.map((order) => {
        console.log("From map =>", order.orderItemDTOList);
        return <OrderCard key={order.orderItemDTOList[0].orderId} orderDetails={order} />
      })}
    </div>
  );
}

export default OrderList;
