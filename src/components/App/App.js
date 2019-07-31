import React, { Component } from 'react'
import './App.css'

import Login from './Login/Login'
import Keyboard from './Keyboard/Keyboard'
import Win from './Win/Win'
import Lose from './Lose/Lose'
import Words from '../../words.json'
import hangman1 from '../../picture/hangman1.png';
import hangman2 from '../../picture/hangman2.png';
import hangman3 from '../../picture/hangman3.png';
import hangman4 from '../../picture/hangman4.png';
import hangman5 from '../../picture/hangman5.png';
import hangman6 from '../../picture/hangman6.png';
import hangman7 from '../../picture/hangman7.png';
import hangman8 from '../../picture/hangman8.png';
import hangman9 from '../../picture/hangman9.png';
import hangman10 from '../../picture/hangman10.png';
import hangman11 from '../../picture/hangman11.png';

class App extends Component {

  state = {
    user: 'Alex',
    secretWord: null,
    knownWord: ['_','_','_','_','_','_','_','_'],
    errors: 0,
    foundLetters: 0
  }

  pressKey = char => {
    const { secretWord, knownWord, foundLetters, errors } = this.state

    let count = 0
    for (let index = 0; index < secretWord.length; index++) {
      if(secretWord[index] === char && knownWord[index] === '_') {
        knownWord[index] = char
        count++
      }      
    }

    document.getElementById(char).classList.add('tested');

    if(count === 0){
      const newErrors = errors + 1
      this.setState({ errors: newErrors })
    }

    this.setState({ knownWord: knownWord, foundLetters: foundLetters + count })
    
    return
  }

  playAgain = () => {
    this.setState({ 
      knownWord: ['_','_','_','_','_','_','_','_'], 
      errors: 0, 
      foundLetters: 0 
    })
    return 
  }

  initGame = () => {
    const json = require('../../words.json');
    const secretWord = json[Math.floor(Math.random() * Math.floor(json.length))];

    let knownWord = new Array(secretWord.length); 
    knownWord.fill('_');

    this.setState({ 
      secretWord: secretWord, 
      knownWord: knownWord,
      errors: 0, 
      foundLetters: 0 
    })
    
    return
  }

  render() {
    const { user, knownWord, errors, foundLetters, secretWord } = this.state;
    const lose = errors === 10;
    let won = false;

    if(secretWord == null) {
      this.initGame();
    } else {
      won = foundLetters === secretWord.length
    }

    return (
      <div className="the_hangman_game">
        <div className="title">The Hangman Game</div>
        {user === null && (
          <Login />
        )}

        {user !== null && (
          <div className="knownWord">
              {knownWord.map((char, index) => (
                  <span key={index}> {char} </span>
              ))}
          </div>
        )}

        {user !== null && won === false && lose === false && (
          <Keyboard onClick={this.pressKey} />
        )}

        {won === true && lose === false && (
          <Win errors={errors} playAgain={this.initGame} />
        )}
        
        {lose === true && won === false && (
          <Lose secretWord={secretWord} playAgain={this.initGame} />
        )}

        {user !== null && (
          <div className="picture">
            { errors === 0 && <img src={hangman1} /> }
            { errors === 1 && <img src={hangman2} /> }
            { errors === 2 && <img src={hangman3} /> }
            { errors === 3 && <img src={hangman4} /> }
            { errors === 4 && <img src={hangman5} /> }
            { errors === 5 && <img src={hangman6} /> }
            { errors === 6 && <img src={hangman7} /> }
            { errors === 7 && <img src={hangman8} /> }
            { errors === 8 && <img src={hangman9} /> }
            { errors === 9 && <img src={hangman10} /> }
            { errors === 10 && <img src={hangman11} /> }
          </div>
        )}

      </div>
    )  
  }
}

export default App
