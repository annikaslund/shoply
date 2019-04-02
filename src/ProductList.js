import React, { Component } from 'react';
import inventory from "./inventory";
import ItemCard from "./ItemCard";

// import './Home.css';

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        { inventory.items.map(item => (
            <ItemCard name={ item.name } 
                      price={ item.price }
                      key={ item.id }
                      image_url={ item.image_url }/>
        )) }
      </div>
    );
  }
}

export default ProductList;