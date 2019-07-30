import React from 'react'
import PropTypes from 'prop-types'

import './Win.css'

const Win = ({ playAgain }) => (
    <div className="win">
        Victoire !

        <button onClick={() => playAgain()}> Rejouer </button>
    </div>
)
  
Win.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Win