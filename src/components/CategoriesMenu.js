import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './Loader';

const CategoriesMenu = ({ categories, categoryLocation }) => {
  const result = categories.map(function (singleCategory) {
    return (
      <Link
        key={singleCategory}
        className={`nav-link ${singleCategory === categoryLocation && 'disabled'}`}
        style={{ margin: 20 }}
        to={`/category/${singleCategory}`}>
        {singleCategory}
      </Link>
    );
  });

  if (categories.length === 0) {
    return <Loader />;
  }

  return <nav className="nav nav-pills nav-fill ">{result}</nav>;
};

export default CategoriesMenu;
