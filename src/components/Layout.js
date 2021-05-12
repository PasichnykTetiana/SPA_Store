import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../api';
import Cart from './Cart';
import CategoriesMenu from './CategoriesMenu';

const Layout = ({ pageName, children }) => {
  const [categories, setCategories] = useState([]);
  const productsCount = parseInt(localStorage.getItem('productsCount')) || 0;

  useEffect(() => {
    getAllCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);

  return (
    <div className="container">
      <CategoriesMenu categories={categories} categoryLocation={pageName} />
      <h1 className="text-center" style={{ marginTop: 30 }}>
        {pageName}
      </h1>
      <div className="d-flex justify-content-end h1">
        <Link to={`/cart`}>
          <Cart count={productsCount} />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
