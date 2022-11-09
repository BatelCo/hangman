import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    constructor() {
        super();
    }
    state = {  }
    render() { 
        const splittedLetters = Object.keys(this.props.letterStatus)
        console.log(splittedLetters)
        return (<div>
                    <div>Avilable Letters</div>
                    <div>{splittedLetters.map(c => <Letter char = {c}></Letter>)}</div>
            </div>
        );
    }
}
 
export default Letters;