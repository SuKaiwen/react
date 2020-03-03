import React, {Component} from 'react';
import './App.css';

class Button extends Component{
    // Check if the element is a number.
    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=";
    };

    render(){
        return (
            //Check if the button is an operator (not a number!) if so style it differently.
            <div className={`button2 ${this.isOperator(this.props.children)
            ? "" : "operator"}`} onClick={() => this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;
