import React, { Component } from 'react';

// import './Home.css';

class DiscountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discountCode: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        //TODO:
    }

    render() {
        return (
            <div className="DiscountForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="discount">Discount:</label>
                    <input name="discount" value={ this.state.discountCode } onChange={ this.handleChange }/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default DiscountForm;