import React from 'react'
import PropTypes from 'prop-types'

import './Win.css'

const Win = (secretWord) => (
    <div className="win">
        Victoire
    </div>
)
  
Win.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Win