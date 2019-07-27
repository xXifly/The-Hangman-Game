import React from 'react'
import PropTypes from 'prop-types'

import './Game.css'

import Key from './Key/Key'

const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const Game = ({ knownWord, onClick }) => (

    <div className="game">
        <div className="knownWord">
            {knownWord.map((char, index) => (
                <span key={index}> {char} </span>
            ))}
        </div>
        <div>Entrez une lettre :</div>

        <div>
            {ALPHABET.map((char) => (
                <Key char={char} key={char} onClick={() => onClick(char)} />
            ))}
        </div>

    </div>
)
  
Game.propTypes = {
    knownWord: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    onClick: PropTypes.func.isRequired,
}

export default Game