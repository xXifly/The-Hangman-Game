import React, { Component } from 'react'
import './App.css'

import Login from './Login/Login'
import Game from './Game/Game'
import Win from './Win/Win'

class App extends Component {

  state = {
    user: 'Alex',
    secretWord: "CHOCOLAT",
    knownWord: ['_','_','_','_','_','_','_','_'],
    guesses: 0,
    win: false
  }

  action = char => {
    const { secretWord, knownWord } = this.state

    for (let index = 0; index < secretWord.length; index++) {
      if(secretWord[index] === char) {
        console.log(secretWord[index])
        knownWord[index] = char
      }      
    }

    this.setState({ knownWord: knownWord })

    return
  }

  render() {
    const { user, secretWord, knownWord, guesses, win } = this.state
    return (
      <div className="the_hangman_game">

          {user === null && (
            <Login />
          )}

          {user !== null && win === false && (
            <Game knownWord={knownWord} onClick={this.action} />
          )}

          {win === true && (
            <Win secretWord={secretWord} />
          )}

      </div>
    )  
  }
}

export default App
