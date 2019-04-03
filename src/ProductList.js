import React, { Component } from 'react';
import inventory from "./inventory";
import { addItem, removeItem } from "./actions";
import ItemCard from "./ItemCard";
import { connect } from "react-redux";

class ProductList extends Component {

  constructor(props) {
    super(props)

    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
  }

  handleAddCard(item) {
    this.props.addItem(item);
  }

  handleRemoveCard(id) {
    this.props.removeItem(id);
  }

  render() {

    let productList

    console.log("YOOO",this.props)
    if (this.props.match.path !== "/cart"){
      productList = (
        <div className="ProductList">
          {inventory.items.map(item => (
            <ItemCard
              name={item.name}
              price={item.price}
              key={item.id}
              image_url={item.image_url}
              handleAddCard={() => this.handleAddCard(item)}
              handleRemoveCard={() => this.handleRemoveCard(item)}
            />))}
        </div>
      )
    } else {
      console.log("EYYYY", this.props.cart)
      productList = (
        <div className="ProductList">
          <ul>
            {this.props.cart.map(item => (
              <li>
                Item Name: {item.name}
                ,   
                Price: ${item.price}
                ,  
                Count:  {item.count}
              </li>))}
            </ul>
        </div>
      )
    }
    return productList
  }
};

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(ProductList);
