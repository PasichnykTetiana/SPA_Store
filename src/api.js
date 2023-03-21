export function getAllProducts(sort = "asc") {
  return fetch(`https://fakestoreapi.com/products?sort=${sort}`).then((res) =>
    res.json()
  );
}

export function getProduct(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
}

export function getAllCategories() {
  return fetch(`https://fakestoreapi.com/products/categories/`).then((res) =>
    res.json()
  );
}

export function getCategoryProducts(categoryName) {
  return fetch(
    `https://fakestoreapi.com/products/category/${categoryName}`
  ).then((res) => res.json());
}
