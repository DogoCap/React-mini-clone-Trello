import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import '../../style/boardsList.scss'
import CreateBoardPopover from '../common/popover/CommonForm'

class BoardList extends React.Component {
  static propTypes = {
    fav: PropTypes.bool,
    boards: PropTypes.array,
    toggleFavBoard: PropTypes.func,
    openPopover: PropTypes.func,
    createBoard: PropTypes.func,
    closePopover: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.handleFavClick = this.handleFavClick.bind(this)
  }

  headline (fav) {
    if (!fav) {
      return <div><i className='fa fa-user' aria-hidden='true' /> <h5>Personal Boards</h5></div>
    }
    return <div><i className='fa fa-star' aria-hidden='true' /> <h5>Favorite Boards</h5></div>
  }

  createBoard = (name) => {
    this.props.createBoard(name)
    this.props.closePopover()
  }

  handleCreateBoardClick = (e) => {
    e.preventDefault()
    this.props.openPopover('Create New Board', <CreateBoardPopover title='Name' placeholder='New Board Name' btn='Create' onSubmit={this.createBoard} />, e.target, true, false)
  }

  createLink (fav) {
    if (!fav) {
      return <Col xs={3} className='boards-list-board board--create'><a href='#' onClick={this.handleCreateBoardClick}>Create</a></Col>
    }
    return ''
  }

  handleFavClick (boardId) {
    this.props.toggleFavBoard(boardId)
  }

  render () {
    if (this.props.fav && this.props.boards.length === 0) return <div className='boards-list' />
    return (
      <div className='boards-list'>
        <Row>
          <Col xs={12}>
            {this.headline(this.props.fav)}
          </Col>
        </Row>
        <Row>
          {this.props.boards.map(board =>
            <Col key={board.id} xs={3} className={'boards-list-board ' + (board.favorite ? 'boards-list-board--fav' : '')}>
              <Link to={`/b/${board.id}`} style={{background: board.background}}><i className='fa fa-star-o' aria-hidden='true' onClick={(e) => { e.preventDefault(); this.handleFavClick(board.id) }} /> {board.name}</Link>
            </Col>
          )}
          {this.createLink(this.props.fav)}
        </Row>
      </div>
    )
  }
};

export default BoardList
