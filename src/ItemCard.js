import React, { Component } from 'react';

// import './Home.css';

class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard">
        <img src={this.props.image_url} alt={this.props.name}/>
        { this.props.name }
        { this.props.price }
      </div>
    );
  }
}

export default ItemCard;