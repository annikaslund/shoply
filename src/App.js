import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";

import './App.css';

import Header from './Header';
import Cart from './Cart';
import Home from './Home';

class App extends Component {

  render() {

    const totalPrice = this.props.cart.reduce(
                      (price, item)=> {
                      return price+(item.price*item.count)}, 0);

    const totalNumber = this.props.cart.reduce(
                      (acc, item)=> {
                      return acc+item.count}, 0);

    return (
          <div className="App">                          
            <Header 
                totalNumber={totalNumber}
                totalPrice={totalPrice}
                />
            <Switch />
              <Route path="/" render={()=> <Home />} />
              <Route path="/cart" render={()=> <Cart />} />
            <Switch />
          </div>
    );
  }
}

function mapStateToProps(state){

  return {
    cart: state.cart
  }
}

export default connect(
  mapStateToProps
)(App);
