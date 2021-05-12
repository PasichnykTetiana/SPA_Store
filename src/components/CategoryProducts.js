import React, { useState, useEffect, useReducer } from 'react';

import { getCategoryProducts } from '../api';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import { Loader } from '../components/Loader';

import { BrowserRouter as Router, useRouteMatch } from 'react-router-dom';

function CategoryProducts() {
  const match = useRouteMatch('/category/:categoryName');
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const [category, setCategory] = useState({ product: [], pageName: '', loaded: false });

  useEffect(() => {
    setCategory({ ...category, pageName: match.params.categoryName, loaded: false });

    if (match.params.categoryName === category.pageName) {
      getCategoryProducts(match.params.categoryName).then((data) =>
        setCategory({ ...category, product: data, loaded: true }),
      );
    }
  }, [match.params.categoryName, category.pageName]);

  function rerender() {
    forceUpdate();
  }

  const result = category.product.map((item) => {
    return <ProductCard item={item} key={item.id} rerenderParent={rerender} />;
  });

  return (
    <div>
      <Layout pageName={match.params.categoryName}>
        {!category.loaded ? <Loader /> : <div className="wrapper">{result}</div>}
      </Layout>
    </div>
  );
}

export default CategoryProducts;
