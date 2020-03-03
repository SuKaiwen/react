import React, {Component} from 'react';
import './index.css';

class ClearButton extends Component{
    render(){
        return (
            <div className = "clearButton" onClick={() => this.props.handleClear()}>
                {this.props.children}
            </div>
        );
    }
}

export default ClearButton;
