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
    foundLetters: 0
  }

  action = char => {
    const { secretWord, knownWord, foundLetters, guesses } = this.state
    const newGuesses = guesses + 1
    let count = 0
    for (let index = 0; index < secretWord.length; index++) {
      if(secretWord[index] === char && knownWord[index] === '_') {
        knownWord[index] = char
        count++
      }      
    }

    this.setState({ knownWord: knownWord, foundLetters: foundLetters + count, guesses: newGuesses })
    
    return
  }

  playAgain = () => {
    this.setState({ knownWord: ['_','_','_','_','_','_','_','_'], guesses: 0, foundLetters: 0 })
    return
  }

  render() {
    const { user, secretWord, knownWord, guesses, win, foundLetters } = this.state
    const won = foundLetters === secretWord.length

    return (
      <div className="the_hangman_game">

        <div>Essais : {guesses}</div>

        {user === null && (
          <Login />
        )}
        
        {user !== null && won === false && (
          <Game knownWord={knownWord} onClick={this.action} />
        )}

        {won === true && (
          <Win playAgain={this.playAgain} />
        )}

      </div>
    )  
  }
}

export default App
