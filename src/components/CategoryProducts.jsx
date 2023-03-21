import React, { useState, useEffect, useReducer } from "react";

import { useRouteMatch } from "react-router-dom";
import { getCategoryProducts } from "../api";
import ProductCard from "./ProductCard";
import ProductCardCollection from "./ProductCardCollection";
import Layout from "./Layout";
import Loader from "./Loader";

function createRerenderFunction(forceUpdate) {
  return () => forceUpdate();
}

function CategoryProducts() {
  const match = useRouteMatch("/category/:categoryName");
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [category, setCategory] = useState({
    product: [],
    pageName: "",
    loaded: false,
  });

  useEffect(() => {
    setCategory({
      ...category,
      pageName: match.params.categoryName,
      loaded: false,
    });

    if (match.params.categoryName === category.pageName) {
      getCategoryProducts(match.params.categoryName).then((data) =>
        setCategory({ ...category, product: data, loaded: true })
      );
    }
  }, [match.params.categoryName, category.pageName]);

  const rerenderFunction = createRerenderFunction(forceUpdate);

  const result = category.product.map((item) => {
    return (
      <ProductCard
        item={item}
        key={item.id}
        rerenderParent={rerenderFunction}
      />
    );
  });

  return (
    <Layout pageName={match.params.categoryName}>
      {!category.loaded ? (
        <Loader />
      ) : (
        <ProductCardCollection>{result}</ProductCardCollection>
      )}
    </Layout>
  );
}

export default CategoryProducts;
