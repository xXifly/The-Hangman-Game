import React from 'react'
import PropTypes from 'prop-types'

import './Lose.css'

// Rendu du paneau d'affichage en cas de défaite
const Lose = ({ secretWord, playAgain }) => (
    <div className="lose">
        <div className="defeat-panel">
            <div className="defeat">Vous avez perdu !</div>
            <div className="info">Le mot à trouver était : {secretWord}.</div>
        </div>
        <div className="play-again"><button class="btn btn-outline-warning" onClick={() => playAgain()}> Rejouer </button></div>
    </div>
)
  
Lose.propTypes = {
    secretWord: PropTypes.string.isRequired,
    playAgain: PropTypes.func.isRequired
}

export default Lose