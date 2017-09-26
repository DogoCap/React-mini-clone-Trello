import {connect} from 'react-redux'

import List from '../components/board/list'
import {updateListName, deleteList} from '../actions/list'
import {openPopover, closePopover} from '../actions/popover'
import {createCard, rearrangeCards} from '../actions/card'

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.lists.find(list => list.id === ownProps.listId),
    cards: state.cards.filter(card => card.list_id === ownProps.listId)
  }
}

export default connect(mapStateToProps, {
  updateListName,
  deleteList,
  openPopover,
  createCard,
  closePopover,
  rearrangeCards
})(List)
