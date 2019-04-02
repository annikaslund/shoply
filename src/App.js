import React, { Component } from 'react';
import ReactDOM from "react-dom";

import './App.css';

import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import cartReducer from './cartReducer';

import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(cartReducer);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Cart />
            <Home />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
