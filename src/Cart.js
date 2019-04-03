import React, { Component } from 'react';

import ProductList from './ProductList';
import DiscountForm from './DiscountForm';
import { runInThisContext } from 'vm';

class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <ProductList {...this.props.rtProps} />
        <DiscountForm />
      </div>
    );
  }
}

export default Cart;