import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getProduct } from '../api';
import SingleProduct from '../components/SingleProduct';
import Layout from '../components/Layout';
import { Loader } from '../components/Loader';

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    getProduct(this.props.match.params.productId).then((data) =>
      this.setState({
        product: data,
      }),
    );
  }

  rerender = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <Layout pageName="Product Details">
        {this.state.product === null ? (
          <Loader />
        ) : (
          <SingleProduct rerenderParent={this.rerender} item={this.state.product} />
        )}
      </Layout>
    );
  }
}

export default withRouter(ProductDetailsPage);
