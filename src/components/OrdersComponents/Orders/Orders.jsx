import "./Orders.css";

import OrderHeader from "../OrderHeader/OrderHeader";
import OrderList from "../OrderList/OrderList";
import Pagination from "../../ProductsComponents/Pagination/Pagination";

import { getUserOrders } from "../../../api/orderApi";
import { useEffect, useState } from "react";

function Orders() {

  const [orderDetails, setOrderDetails] = useState([])

  useEffect(() => {
    (async function getUserOrderDetails() {
      const data = await getUserOrders();
      setOrderDetails(data);
    })();
  }, []);

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
