import React, { Component } from 'react';

// import './Home.css';

import ProductList from './ProductList';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ProductList {...this.props.rtProps} />
      </div>
    );
  }
}

export default Home;