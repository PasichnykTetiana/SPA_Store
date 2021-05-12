import React from 'react';

export default function SingleProduct({ item, rerenderParent }) {
  function onClick() {
    const productsCount = parseInt(localStorage.getItem('productsCount'));
    if (productsCount) {
      localStorage.setItem('productsCount', productsCount + 1);
    } else {
      localStorage.setItem('productsCount', 1);
    }
    rerenderParent();
  }

  return (
    <div className="row ">
      <div className="col-3 single-photo">
        <img className="card-img-top h-auto w-75" src={item.image} />
      </div>
      <div className="col-9 ">
        <h5 className="card-title">{item.title}</h5>
        <p>Category: {item.category}</p>
        <p>Price: {item.price}</p>
        <button className="btn btn-primary" onClick={onClick}>
          Add to cart
        </button>
        <h5>Description:</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
