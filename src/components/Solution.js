import React, { Component } from 'react';
import Letter from './Letter';
import Letters from './Letters';
class Solution extends Component {
    constructor() {
        super();
    }

    render() { 
        let splittedWord = this.props.solution.word.split("")
        let hint = this.props.solution.hint
        return (<div>
            <div>
                {splittedWord.map(c => <Letter key = {c} char = {this.props.letterStatus[c] ? c : "_ "}/>)}

            </div>
            <div>
                {hint}
            </div>
               </div>);
    }
}
 
export default Solution;