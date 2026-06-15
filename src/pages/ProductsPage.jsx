import { useParams } from "react-router-dom";
import Products from "../components/ProductsComponents/Products/Products";
import { ProductDetailsContext } from "../utils/ContextProducer";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductsComponents/ProductDetails/ProductDetails";


function ProductsPage() {

  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    (async function () {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        const data = await response.json();
        setProductDetails(data.products);
      } catch (e) {
        console.error(e);
      }

    })()
  }, [])



    return (
      <ProductDetailsContext.Provider value={productDetails}>
        {id ? <ProductDetails/> : <Products />}
      </ProductDetailsContext.Provider>
    );
}

export default ProductsPage;
