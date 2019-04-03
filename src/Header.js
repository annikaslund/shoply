import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>SHOPLYYYY</h1>
        <NavLink to="/">Home</NavLink>
        <br/>
        <NavLink to="/cart">Cart</NavLink>
        <p>
          Total Number: {this.props.totalNumber}
        </p>
        <p>
          Total Price: ${this.props.totalPrice}
        </p>
      </div>
    );
  }
}

export default Header;