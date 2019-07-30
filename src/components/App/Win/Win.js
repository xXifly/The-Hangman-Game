import React from 'react'
import PropTypes from 'prop-types'

import './Win.css'

const Win = ({ errors, playAgain }) => (
    <div className="win">
        <div className="victory-panel">
            <div className="victory">Victoire !</div>
            <div className="info">Vous avez trouvé le mot caché en {errors} erreurs.</div>
        </div>
        <div className="play-again"><button class="btn btn-outline-warning" onClick={() => playAgain()}> Rejouer </button></div>
    </div>
)
  
Win.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Win