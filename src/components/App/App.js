import React, { Component } from 'react'
import './App.css'

import Keyboard from './Keyboard/Keyboard'
import Win from './Win/Win'
import Lose from './Lose/Lose'

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

  /** Fonction executée lors du clique sur une touche du clavier */
  pressKey = char => {
    const { secretWord, knownWord, foundLetters, errors } = this.state

    // Ajoute la lettre choisi dans le tableau des lettres trouvées
    let count = 0
    for (let index = 0; index < secretWord.length; index++) {
      if(secretWord[index] === char && knownWord[index] === '_') {
        knownWord[index] = char
        count++
      }      
    }

    // Grise la lettre selectionnée
    document.getElementById(char).classList.add('tested');

    // Si erreur, on incrémente le compteur
    if(count === 0){
      const newErrors = errors + 1
      this.setState({ errors: newErrors })
    }

    // On met à jour l'état
    this.setState({ knownWord: knownWord, foundLetters: foundLetters + count })
    
    return
  }

  /** Initialise la partie */
  initGame = () => {

    // Choisit un mot aléatoire dans le dictionnaire
    const json = require('../../words.json');
    const secretWord = json[Math.floor(Math.random() * Math.floor(json.length))];

    // Remplit le tableau des lettres trouvées
    let knownWord = new Array(secretWord.length); 
    knownWord.fill('_');

    // Initialise l'état
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
            { errors === 0 && <img src={hangman1} alt="1 erreur sur 11" /> }
            { errors === 1 && <img src={hangman2} alt="2 erreur sur 11" /> }
            { errors === 2 && <img src={hangman3} alt="3 erreur sur 11" /> }
            { errors === 3 && <img src={hangman4} alt="4 erreur sur 11" /> }
            { errors === 4 && <img src={hangman5} alt="5 erreur sur 11" /> }
            { errors === 5 && <img src={hangman6} alt="6 erreur sur 11" /> }
            { errors === 6 && <img src={hangman7} alt="7 erreur sur 11" /> }
            { errors === 7 && <img src={hangman8} alt="8 erreur sur 11" /> }
            { errors === 8 && <img src={hangman9} alt="9 erreur sur 11" /> }
            { errors === 9 && <img src={hangman10} alt="10 erreur sur 11" /> }
            { errors === 10 && <img src={hangman11} alt="11 erreur sur 11" /> }
          </div>
        )}

      </div>
    )  
  }
}

export default App
