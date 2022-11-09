import React, { Component } from 'react';

class Letter extends Component {
    constructor() {
        super();
    }
    render() { 
        return (<span>{this.props.char}</span>);
    }
}
 
export default Letter;