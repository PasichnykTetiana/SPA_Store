import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getProduct } from "../api";
import SingleProduct from "../components/SingleProduct";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

function ProductDetailsPage({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(match.params.productId).then((data) => setProduct(data));
  }, [match.params.productId]);

  const rerender = () => {
    setProduct({ ...product });
  };

  return (
    <Layout pageName="Product Details">
      {product === null ? (
        <Loader />
      ) : (
        <SingleProduct rerenderParent={rerender} item={product} />
      )}
    </Layout>
  );
}

export default withRouter(ProductDetailsPage);
