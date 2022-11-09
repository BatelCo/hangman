import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    constructor() {
        super();
    }
    render() { 
        const splittedLetters = Object.keys(this.props.letterStatus)
        console.log(splittedLetters)
        return (<div>
                    <div>Avilable Letters</div>
                    <div>{splittedLetters.map(c => <Letter letterStatus = {this.props.letterStatus[c]} char = {c} key = {c}/>)}</div>
            </div>
        );
    }
}
 
export default Letters;