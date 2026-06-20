import { useParams } from "react-router-dom";
import Products from "../components/ProductsComponents/Products/Products";
import { ProductDetailsContext } from "../utils/ContextProducer";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductsComponents/ProductDetails/ProductDetails";
import Loader from "../components/HomeComponents/Loader/Loader";

function ProductsPage() {

  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    (async function () {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        if(!response.ok) {
          throw new Error("Request cannot be processed!");
        }
        const data = await response.json();
        setProductDetails(data.products);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }

    })()
  }, [])

    return (
      <ProductDetailsContext.Provider value={productDetails}>
        {isLoading ? <Loader /> : id ? <ProductDetails/> : <Products />}
      </ProductDetailsContext.Provider>
    );
}

export default ProductsPage;
