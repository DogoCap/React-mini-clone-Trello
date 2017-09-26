import {connect} from 'react-redux'

import Card from '../components/board/card'
import {deleteCard} from '../actions/card'

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.find(card => card.id === ownProps.cardId)
  }
}

export default connect(mapStateToProps, {deleteCard})(Card)
