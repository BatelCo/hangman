import React, { Component } from 'react';
import Letter from './Letter';
import Letters from './Letters';
class Solution extends Component {
    constructor() {
        super();
    }

    render() { 
        console.log(this.props.solution)
        let splittedWord = this.props.solution.word.split("")
        let splittedHint = this.props.solution.hint.split("")
        return (<div>
            <div>
                {splittedWord.map(c => <Letter char = {c}></Letter>)}
            </div>
            <div>
                {splittedHint.map(c => <Letter char = {c}></Letter>)}
            </div>
               </div>);
    }
}
 
export default Solution;