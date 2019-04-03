import React, { Component } from 'react';

import './ItemCard.css';

class ItemCard extends Component {
    render() {
        console.log("THIS IS THE KEYYY",this.props.key)
        return (
            <div className="ItemCard">
                <h4>{this.props.name}</h4>
                <div id="item-image">
                    <img src={this.props.image_url} alt={this.props.name} />
                </div>
                <div id="item-info">
                    {this.props.price}
                </div>
                <button onClick={this.props.handleAddCard}>ADD</button>
                <button onClick={this.props.handleRemoveCard}>REMOVE</button>
            </div>
        );
    }
}

export default ItemCard;