import { useParams } from "react-router-dom";
import Products from "../components/ProductsComponents/Products/Products";
import { ProductDetailsContext } from "../utils/ContextProducer";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductsComponents/ProductDetails/ProductDetails";
import Loader from "../components/HomeComponents/Loader/Loader";
import { getProducts } from "../api/productApi";

function ProductsPage() {

  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    (async function () {
      try {
        const data = await getProducts();
        setProductDetails(data.products);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }

    })()
  }, [])

    return (
      <ProductDetailsContext.Provider value={productDetails}>
        {loading ? <Loader /> : id ? <ProductDetails/> : <Products />}
      </ProductDetailsContext.Provider>
    );
}

export default ProductsPage;
