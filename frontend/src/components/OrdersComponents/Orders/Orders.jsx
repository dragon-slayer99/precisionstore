import "./Orders.css";

import OrderHeader from "../OrderHeader/OrderHeader";
import OrderList from "../OrderList/OrderList";
import Pagination from "../../ProductsComponents/Pagination/Pagination";


function Orders({orderDetails}) {


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
