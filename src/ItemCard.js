import React, { Component } from 'react';

// import './Home.css';

class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard">
        <img src={this.props.image_url} alt={this.props.name}/>
        { this.props.name }
        { this.props.price }
        <button>Add to cart</button>
        <button>Remove from cart</button>
      </div>
    );
  }
}

export default ItemCard;