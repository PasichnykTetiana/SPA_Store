import React, { useReducer } from 'react';
import ButtonCart from '../components/ButtonCart';
import cartEmptyImage from '../assets/empty_cart.png';

const CartPage = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || 0;
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  function deleteCart() {
    localStorage.removeItem('cart');
    localStorage.removeItem('productsCount');
    rerender();
  }

  function rerender() {
    forceUpdate();
  }

  if (cart) {
    const result = cart.map((item) => {
      return (
        <div key={item.id}>
          <div className="card mt-2 mb-2">
            <div className="row g-0">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img className="" src={item.image} style={{ width: 150 }} />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <ButtonCart item={item} rerenderParent={rerender} value={'delete'}>
                      <button className="btn btn-outline-secondary">-</button>
                    </ButtonCart>
                    <span> {item.productAmount} </span>
                    <ButtonCart item={item} rerenderParent={rerender} value={'add'}>
                      <button className="btn btn-outline-secondary">+</button>
                    </ButtonCart>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Total price: {(item.price * item.productAmount).toFixed(2)}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    let total = 0;

    cart.forEach((item) => {
      total = total + item.productAmount * item.price;
    });

    return (
      <div className="position-relative ">
        <div
          className="position-absolute top-0 start-50 translate-middle-x"
          style={{ width: 540, marginTop: 20 }}>
          <div>
            <div>{result}</div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary" onClick={deleteCart}>
                Clear cart
              </button>
              <div>Total: {total}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="position-relative ">
        <img
          src={cartEmptyImage}
          alt="Empty cart"
          className="position-absolute top-0 start-50 translate-middle-x cart-img"
        />
      </div>
    );
  }
};

export default CartPage;
