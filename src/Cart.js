import React, { Component } from 'react';

// import './Home.css';

import ProductList from './ProductList';
import DiscountForm from './DiscountForm';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <ProductList />
        <DiscountForm />
      </div>
    );
  }
}

export default Cart;