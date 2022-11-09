import React, { Component } from 'react';
import Letter from './Letter';
class Solution extends Component {
    constructor() {
        super();
    }

    render() { 
        console.log(this.props.solution)
        let splittedWord = this.props.solution.word.split("")
        let hint = this.props.solution.hint
        return (<div>
            <div>
                {splittedWord.map(c => <Letter char = {c} key = {c}/>)}
            </div>
            <div>
                {hint}
            </div>
               </div>);
    }
}
 
export default Solution;