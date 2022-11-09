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
    // this.state = {letterStatus :this.generateLetterStatuses()}
    this.state = {letterStatus :{}}

  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = constants.FIRST_ASCII_CHAR; i < constants.LAST_ASCII_CHAR; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div className="App">
          <App>
            <Score/><Solution letterStatus= {this.state.letterStatus} />
            <Letters letterStatus = {this.state.letterStatus}>
            </Letters>
          </App>
      </div>
    );
  }
}


export default App;
