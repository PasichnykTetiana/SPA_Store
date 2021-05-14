import React from 'react';
import ButtonCart from '../components/ButtonCart';

export default function SingleProduct({ item, rerenderParent }) {
  return (
    <div className="row ">
      <div className="col-3 single-photo">
        <img className="card-img-top h-auto w-75" src={item.image} />
      </div>
      <div className="col-9 ">
        <h5 className="card-title">{item.title}</h5>
        <p>Category: {item.category}</p>
        <p>Price: {item.price}</p>

        <ButtonCart item={item} rerenderParent={rerenderParent} value={'add'}>
          <button className="btn btn-primary mybtn">Add to cart</button>
        </ButtonCart>
        <h5>Description:</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
