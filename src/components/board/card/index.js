import React from 'react'
import PropTypes from 'prop-types'

import '../../../style/card.scss'

const Card = ({card, deleteCard}) => (
  <div className='list-card'>
    {card.name}
    <i className='fa fa-trash' aria-hidden='true' onClick={() => { deleteCard(card.id) }} />
  </div>
)

Card.propTypes = {
  card: PropTypes.object,
  deleteCard: PropTypes.func
}

export default Card
