import React from 'react'
import PropTypes from 'prop-types'

import './Key.css'

// Rendu d'une touche du clavier
const Key = ({ char, onClick }) => (
    <span className="key">
        <button id={char} onClick={() => onClick(char)}> {char} </button>
    </span>
)
  
Key.propTypes = {
    char: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Key