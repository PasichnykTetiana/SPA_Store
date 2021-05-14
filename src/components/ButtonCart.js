import React from 'react';

export default function ButtonCart({ item, rerenderParent, value, children }) {
  function onClick() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
      const result = cart.findIndex((product) => {
        return product.id == item.id;
      });

      switch (value) {
        case 'add':
          if (cart) {
            if (result >= 0) {
              cart[result].productAmount += 1;
            } else {
              cart.push({
                id: item.id,
                image: item.image,
                price: item.price,
                title: item.title,
                productAmount: 1,
              });
            }

            let total = 0;

            cart.forEach((product) => {
              total = total + product.productAmount * 1;
            });

            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('productsCount', total);
          } else {
            localStorage.setItem(
              'cart',
              JSON.stringify([
                {
                  id: item.id,
                  image: item.image,
                  price: item.price,
                  title: item.title,
                  productAmount: 1,
                },
              ]),
            );
            localStorage.setItem('productsCount', 1);
          }
          rerenderParent();

          break;

        case 'delete':
          if (cart) {
            if (result >= 0 && cart[result].productAmount > 1) {
              cart[result].productAmount -= 1;
            } else {
              cart.splice(result, result + 1);
            }

            let total = 0;

            cart.forEach((product) => {
              total = total + product.productAmount * 1;
            });

            if (cart.length > 0) {
              localStorage.setItem('cart', JSON.stringify(cart));
              localStorage.setItem('productsCount', total);
            } else {
              localStorage.removeItem('cart');
              localStorage.removeItem('productsCount');
            }
          }
          rerenderParent();

          break;
      }
    } else {
      localStorage.setItem(
        'cart',
        JSON.stringify([
          {
            id: item.id,
            image: item.image,
            price: item.price,
            title: item.title,
            productAmount: 1,
          },
        ]),
      );
      localStorage.setItem('productsCount', 1);
    }
  }

  return <span onClick={onClick}>{children}</span>;
}
