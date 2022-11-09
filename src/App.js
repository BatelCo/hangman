import './App.css';
import React, { Component } from 'react';
import Letters from './components/Letters'
import Score from './components/Score'
import Solution from './components/Solution'
import constants from './constants' 
import Letter from './components/Letter'


class App extends Component {
  constructor() {
    super()
    this.state = {letterStatus : this.generateLetterStatuses(),
                  solution : {"word" : "CALM",
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
            <Letters letterStatus = {this.state.letterStatus}>
            </Letters>
      </div>
    );
  }
}


export default App;
