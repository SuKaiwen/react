import React, {Component} from 'react';
import './App.css';
import './index.css';
import {Link} from 'react-router-dom';

import Button from './Button'
import CalcInput from './CalcInput'
import ClearButton from './ClearButton'

class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: "",
            prevNumber: "",
            currentNumber: "",
            operator: ""
        }
    }

    // Concatenates the number pressed to the input
    addInput = val => {
        if(val === "0"){
            // Ensure we don't add 0 to the front only behind numbers
            if(this.state.input !== ""){
                this.setState({input: this.state.input + val});
            }
        }else{
            this.setState({input: this.state.input + val});
        }
    };

    addDecimal = val => {
        // If the user wishes to add demical point at the start we need to add 0 first
        if(this.state.input === ""){
            this.setState({input: this.state.input + "0."})
        }else{
            // Only add a decimal point once
            // indexOf is -1 meaning it is NOT there
            if(this.state.input.indexOf(".") === -1){
                this.setState({input: this.state.input + val});
            }
        }
    };

    addition = () => {
        let prevNum = this.state.input;
        let operator = "plus";

        this.setState({
            prevNumber: prevNum,
            input: "",
            operator: operator
        })
    };

    subtraction = () => {
        let prevNum = this.state.input;
        let operator = "minus";

        this.setState({
            prevNumber: prevNum,
            input: "",
            operator: operator
        })
    };

    multiplication = () => {
        let prevNum = this.state.input;
        let operator = "times";

        this.setState({
            prevNumber: prevNum,
            input: "",
            operator: operator
        })
    };

    division = () => {
        let prevNum = this.state.input;
        let operator = "divide";

        this.setState({
            prevNumber: prevNum,
            input: "",
            operator: operator
        })
    };

    // Get the input and check which operator the user has selected and perform
    // based on that.
    equal = () => {
        //this.state.currentNumber = this.state.input;
        let curr = this.state.input;

        if(this.state.operator === "plus"){
            this.setState({
                input: parseFloat(this.state.prevNumber) + parseFloat(curr),
                currentNumber: this.state.input
            });
        }
        else if(this.state.operator === "minus"){
            this.setState({
                input: parseFloat(this.state.prevNumber) - parseFloat(curr),
                currentNumber: this.state.input
            });
        }
        if(this.state.operator === "times"){
            this.setState({
                input: parseFloat(this.state.prevNumber) * parseFloat(curr),
                currentNumber: this.state.input
            });
        }
        if(this.state.operator === "divide"){
            this.setState({
                input: parseFloat(this.state.prevNumber) / parseFloat(curr),
                currentNumber: this.state.input
            });
        }
    };

    clearInput = () => {
        this.setState({ input: ""});
    };

    render(){
        return (
            <div className="App">
              <div style={{display:'flex', margin:'auto', justifyContent:'center', backgroundColor:'#3F2C7F'}}>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}>Kevin Su</h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/TicTacToe'} style={{ color: 'white'}}>Tic-Tac-Toe</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Connect4'} style={{ color: 'white'}}>Connect-4</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Calculator'} style={{ color: 'white'}}>Calculator</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Sorter'} style={{ color: 'white'}}>Sorter</Link></h4>
              </div>
              <header className="App-header">
                  <h1 style={{ color: 'orange'}}>Calculator</h1>
                  <div className = "calc">
                    <div className = "calcRow">
                        <CalcInput>{this.state.input}</CalcInput>
                    </div>
                    <div className = "calcRow">
                        <Button handleClick={this.addInput}>7</Button>
                        <Button handleClick={this.addInput}>8</Button>
                        <Button handleClick={this.addInput}>9</Button>
                        <Button handleClick={this.division}>/</Button>
                    </div>
                    <div className = "calcRow">
                        <Button handleClick={this.addInput}>4</Button>
                        <Button handleClick={this.addInput}>5</Button>
                        <Button handleClick={this.addInput}>6</Button>
                        <Button handleClick={this.multiplication}>X</Button>
                    </div>
                    <div className = "calcRow">
                        <Button handleClick={this.addInput}>1</Button>
                        <Button handleClick={this.addInput}>2</Button>
                        <Button handleClick={this.addInput}>3</Button>
                        <Button handleClick={this.addition}>+</Button>
                    </div>
                    <div className = "calcRow">
                        <Button handleClick={this.addDecimal}>.</Button>
                        <Button handleClick={this.addInput}>0</Button>
                        <Button handleClick={this.equal}>=</Button>
                        <Button handleClick={this.subtraction}>-</Button>
                    </div>
                    <div className = "calcRow">
                        <ClearButton handleClear={this.clearInput}>CE</ClearButton>
                    </div>
                </div>
              </header>
            </div>
        );
    }
}

export default Calculator;
