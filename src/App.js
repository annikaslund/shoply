import React, { Component } from 'react';
import ReactDOM from "react-dom";

import './App.css';

import Header from './Header';
import Cart from './Cart';
import Home from './Home';

import { addItem, removeItem } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
          <div className="App">
            <Header />
            <Cart />
            <Home />
          </div>
    );
  }
}

function mapStateToProps(state){
  return {
    items: state.items
  }
}

export default connect(
  mapStateToProps,
  { addItem, removeItem }
)(App);
