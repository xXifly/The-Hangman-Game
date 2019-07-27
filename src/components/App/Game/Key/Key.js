import React from 'react'
import PropTypes from 'prop-types'

import './Key.css'

const Key = ({ char, onClick }) => (
    <span className="key">
        <button onClick={() => onClick(char)}> {char} </button>
    </span>
)
  
Key.propTypes = {
    char: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Key