import { getUserOrders } from "../api/orderApi";
import { useState, useEffect } from "react";

import Loader from "../components/HomeComponents/Loader/Loader";
import Orders from "../components/OrdersComponents/Orders/Orders";
import { getProducts } from "../api/productApi";
import { ProductDetailsContext } from "../utils/contextProducer";

function OrderPage() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState();
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    (async function getUserOrderDetails() {
      setLoading(true);
      try {
        const data = await getUserOrders();
        const productDetails = await getProducts();
        console.log(productDetails);
        setOrderDetails(data);
        setProductDetails(productDetails.products);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ProductDetailsContext.Provider value={productDetails}>
          <Orders orderDetails={orderDetails} />
        </ProductDetailsContext.Provider>
      )}
    </>
  );
}

export default OrderPage;
