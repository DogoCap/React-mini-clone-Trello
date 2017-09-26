import {connect} from 'react-redux'

import Board from '../components/board'
import {toggleFavBoard, renameBoard, changeBoardColor} from '../actions/board'
import {createList, rearrangeLists} from '../actions/list'
import {openPopover, closePopover} from '../actions/popover'

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.find(board => board.id.toString() === ownProps.match.params.id),
    lists: state.lists.filter(list => list.board_id.toString() === ownProps.match.params.id)
  }
}

export default connect(mapStateToProps, {
  toggleFavBoard,
  openPopover,
  renameBoard,
  createList,
  changeBoardColor,
  closePopover,
  rearrangeLists
})(Board)
