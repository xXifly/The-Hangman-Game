import React from 'react'
import PropTypes from 'prop-types'

import './Keyboard.css'

import Key from './Key/Key'

const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const Keyboard = ({ onClick }) => (
    <div className="keyboard">
        <div className="message">Entrez une lettre :</div>
        {ALPHABET.map((char) => (
            <Key char={char} key={char} onClick={() => onClick(char)} />
        ))}
    </div>
)
  
Keyboard.propTypes = {
    knownWord: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    onClick: PropTypes.func.isRequired,
}

export default Keyboard