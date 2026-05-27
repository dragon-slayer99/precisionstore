import "./Orders.css";

import OrderHeader from "../OrderHeader/OrderHeader";
import OrderList from "../OrderList/OrderList";
import Pagination from "../../ProductsComponents/Pagination/Pagination";

function Orders() {
  const orderDetails = [
    {
      message: "Order placed successfully",
      orderItemDTOList: [
        {
          productId: 101,
          orderId: 5001,
          quantity: 2,
          purchasedPrice: 1499.99,
        },
        {
          productId: 205,
          orderId: 5001,
          quantity: 1,
          purchasedPrice: 799.5,
        },
      ],
      deliveryStatus: "SHIPPED",
      orderedDate: "2026-05-27T10:30:00Z",
      address: "123 Main Street, Hyderabad, Telangana, India",
      paymentType: "CREDIT_CARD",
    },
    {
      message: "Order delivered successfully",
      orderItemDTOList: [
        {
          productId: 309,
          orderId: 5002,
          quantity: 3,
          purchasedPrice: 299.99,
        },
      ],
      deliveryStatus: "DELIVERED",
      orderedDate: "2026-05-20T14:15:00Z",
      address: "45 Park Avenue, Vijayawada, Andhra Pradesh, India",
      paymentType: "UPI",
    },
    {
      message: "Order is being processed",
      orderItemDTOList: [
        {
          productId: 412,
          orderId: 5003,
          quantity: 1,
          purchasedPrice: 49999.0,
        },
        {
          productId: 518,
          orderId: 5003,
          quantity: 2,
          purchasedPrice: 1299.75,
        },
      ],
      deliveryStatus: "PROCESSING",
      orderedDate: "2026-05-26T08:45:00Z",
      address: "78 MG Road, Bengaluru, Karnataka, India",
      paymentType: "NET_BANKING",
    },
    {
      message: "Order was returned",
      orderItemDTOList: [
        {
          productId: 452,
          orderId: 5004,
          quantity: 1,
          purchasedPrice: 449.0,
        },
        {
          productId: 518,
          orderId: 5003,
          quantity: 2,
          purchasedPrice: 299.75,
        },
      ],
      deliveryStatus: "RETURNED",
      orderedDate: "2026-10-26T09:56:00Z",
      address: "78 MG Road, Bengaluru, Karnataka, India",
      paymentType: "NET_BANKING",
    },
  ];

  return (
    <main className="registry-surface">
      <div className="registry-container">
        <OrderHeader />

        <OrderList orderDetails={orderDetails} />

        <Pagination />
      </div>
    </main>
  );
}

export default Orders;
