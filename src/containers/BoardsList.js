import {connect} from 'react-redux'

import BoardList from '../components/boardsList/List'
import {toggleFavBoard, createBoard} from '../actions/board'
import {openPopover, closePopover} from '../actions/popover'

const mapStateToProps = (state, ownProps) => {
  return {
    boards: state.boards.filter(board => {
      if (ownProps.fav) return board.favorite
      return board
    })
  }
}

export default connect(mapStateToProps, {
  toggleFavBoard,
  openPopover,
  createBoard,
  closePopover
})(BoardList)
