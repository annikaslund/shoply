import React, { Component } from 'react';
import ReactDOM from "react-dom";

import './App.css';

import Header from './Header';
import Cart from './Cart';
import Home from './Home';

import { createStore } from "redux";
import { Provider } from "react-redux";


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

export default App;
