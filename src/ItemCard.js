import React, { Component } from 'react';

import './ItemCard.css';

class ItemCard extends Component {
    render() {
        return (
            <div className="ItemCard">
                <h4>{this.props.name}</h4>
                <div id="item-image">
                    <img src={this.props.image_url} alt={this.props.name} />
                </div>
                <div id="item-info">
                    {this.props.price}
                </div>
                <button>Add to cart</button>
                <button>Remove from cart</button>
            </div>
        );
    }
}

export default ItemCard;