import React from 'react'
import PropTypes from 'prop-types'

import './Game.css'

const Game = ({ knownWord }) => (
    <div className="game">
        <div className="knownWord">
            {knownWord.map((char, index) => (
            <span key={index}> {char} </span>
            ))}
        </div>
        <div>Entrez une lettre :</div>
    </div>
)
  
Game.propTypes = {
    knownWord: PropTypes.arrayOf(
        PropTypes.string.isRequired
    )
}

export default Game