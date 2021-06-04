import React from 'react';
import { getAllProducts } from '../api';
import { Loader } from '../components/Loader';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';

let totalItems = 0;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsLoaded: false,
      itemsPerPage: 3,
      currentPage: 0,
      sort: '',
      test: '',
      paginationPrevious: 'disabled',
      paginationNext: '',
    };
  }

  componentDidMount() {
    getAllProducts(this.state.sort).then((data) => {
      totalItems = data.length;
      this.setState({
        products: data.slice(
          this.state.currentPage * this.state.itemsPerPage,
          this.state.currentPage * this.state.itemsPerPage + this.state.itemsPerPage,
        ),
        productsLoaded: true,
      });
    });
  }

  rerender = () => {
    this.setState({});
  };

  onPaginationClick = (currentPage, sortValue) => {
    this.setState({
      productsLoaded: false,
      currentPage: currentPage,
    });

    getAllProducts(sortValue).then((data) =>
      this.setState({
        products: data.slice(
          currentPage * this.state.itemsPerPage,
          currentPage * this.state.itemsPerPage + this.state.itemsPerPage,
        ),
        productsLoaded: true,
      }),
    );
  };

  handleChange = (e) => {
    this.setState({
      sort: e.target.value,
    });
    this.onPaginationClick(0, e.target.value);
  };

  changeItemsPerPage = (e) => {
    this.setState({
      itemsPerPage: +e.target.value,
      productsLoaded: false,
    });

    getAllProducts(this.state.sort).then((data) =>
      this.setState({
        products: data.slice(0, +e.target.value),
        productsLoaded: true,
        currentPage: 0,
      }),
    );
  };

  render() {
    const result = this.state.products.map((item) => {
      return <ProductCard item={item} key={item.id} rerenderParent={this.rerender} />;
    });

    let paginationButtons = [];
    let buttonsCount = Math.ceil(totalItems / this.state.itemsPerPage);

    for (let i = 0; i < buttonsCount; i++) {
      paginationButtons[i] = (
        <li
          key={i}
          className={`page-item ${this.state.currentPage === i && 'active'}`}
          onClick={() => this.onPaginationClick(i)}>
          <a className="page-link" href="#">
            {i + 1}
          </a>
        </li>
      );
    }

    return (
      <Layout pageName="SPA Store">
        <select value={this.state.itemsPerPage} onChange={this.changeItemsPerPage}>
          <option value="3">3 products per page</option>
          <option value="6">6 products per page</option>
        </select>
        <select onChange={this.handleChange}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        {!this.state.productsLoaded ? <Loader /> : <div className="wrapper ">{result}</div>}
        <nav aria-label="Page navigation example" className="mt-3">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${this.state.currentPage === 0 && 'disabled'}`}>
              <a
                className="page-link"
                href="#"
                aria-label="Previous"
                onClick={() => this.onPaginationClick(this.state.currentPage - 1)}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            {paginationButtons}
            <li
              className={`page-item ${this.state.currentPage === buttonsCount - 1 && 'disabled'}`}>
              <a
                className="page-link"
                href="#"
                aria-label="Next"
                onClick={() => this.onPaginationClick(this.state.currentPage + 1)}>
                <span className="sr-only">Next</span>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </Layout>
    );
  }
}
