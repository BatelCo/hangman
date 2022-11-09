import React, { Component } from 'react';

class Letter extends Component {
    constructor() {
        super();
    }
    render() { 
        console.log(this.props.letterStatus)
        return (<span className={this.props.letterStatus ? "nonavailable-letter" : "available-letter"}

        
        >{this.props.char}</span>);
    }
}
 
export default Letter;