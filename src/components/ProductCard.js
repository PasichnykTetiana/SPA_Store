import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCart from '../components/ButtonCart';

export default function ProductCard({ item, rerenderParent }) {
  return (
    <div className="col h-70" style={{ marginTop: 10 }}>
      <div className="card h-100 card-grid">
        <div style={{ marginTop: 'auto' }}>
          <Link to={`/product/${item.id}`}>
            <img className="card-img-top h-auto w-25" src={item.image} />
          </Link>
        </div>
        <div className="card-body" style={{ marginTop: 'auto' }}>
          <h5 className="card-title">
            <Link to={`/product/${item.id}`}>{item.title}</Link>
          </h5>
          <p>Category: {item.category}</p>
          <p>Price: {item.price}</p>
          <ButtonCart item={item} rerenderParent={rerenderParent} value={'add'}>
            <button className="btn btn-primary mybtn">Add to cart</button>
          </ButtonCart>
        </div>
      </div>
    </div>
  );
}
