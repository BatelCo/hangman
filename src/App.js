import './App.css';
import React, { Component } from 'react';
import Letters from './components/Letters'
import Score from './components/Score'
import Solution from './components/Solution'
import constants from './constants' 


class App extends Component {
  constructor() {
    super()
    this.state = 
    // {letterStatus : this.generateLetterStatuses(),
    {letterStatus :{
      A: false,
      B: false,
      C: false,
      D: false,
      E: true,
      F: false,
      G: false,
      H: false,
      I: false,
      J: false,
      K: false,
      L: false,
      M: false,
      N: false,
      O: false,
      P: false,
      Q: false,
      R: false,
      S: true,
      T: false,
      U: false,
      V: false,
      W: false,
      X: false,
      Y: true,
      Z: false
    },
                  solution : {"word" : "BYTES",
                            "hint" : "this is the hint"},
                  score : 100}
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = constants.FIRST_ASCII_CHAR; i < constants.LAST_ASCII_CHAR; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    console.log(this.state)
    

    return (
      <div className="App">
            <Score score = {this.state.score}/>
            <Solution letterStatus = {this.state.letterStatus} solution = {this.state.solution} />
            <Letters letterStatus = {this.state.letterStatus}/>
      </div>
    );
  }
}


export default App;
