import React from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-bootstrap'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

import '../../style/board.scss'
import List from '../../containers/List'
import CommonForm from '../common/popover/CommonForm'
import CreateList from './CreateList'
import ChangeColor from './ChangeColor'

const SortableItem = SortableElement(({list}) =>
  <List key={list.id} listId={list.id} />
)

const SortableList = SortableContainer(({lists}) =>
  <div>
    {lists.map((list, index) =>
      <SortableItem key={list.id} index={index} list={list} />
    )}
  </div>
)

const changeBgColor = (color) => {
  document.getElementsByTagName('body')[0].style = 'background: ' + color
}

class Board extends React.Component {
  componentWillUnmount () {
    document.getElementsByTagName('body')[0].style = ''
  }

  componentDidMount () {
    changeBgColor(this.props.board.background)
  }

  componentDidUpdate () {
    changeBgColor(this.props.board.background)
  }

  renameBoard = (text) => {
    this.props.renameBoard(this.props.board.id, text)
    this.props.closePopover()
  }

  createList = (text) => {
    this.props.createList(this.props.board.id, text)
    this.props.closePopover()
  }

  handleNameClick = e => {
    this.props.openPopover('Rename Board', <CommonForm onSubmit={(text) => { this.renameBoard(text) }} placeholder='Board Name' title='Name' btn='Change' />, e.target, false)
  }

  handleCreateListClick = e => {
    this.props.openPopover('Create New List', <CommonForm onSubmit={(text) => { this.createList(text) }} placeholder='List Name' title='Name' btn='Change' />, e.target)
  }

  changeColor = color => {
    this.props.changeBoardColor(this.props.board.id, color)
    this.props.closePopover()
  }

  handleColorClick = e => {
    this.props.openPopover('Change Board Color', <ChangeColor onClick={(color) => { this.changeColor(color) }} colorSelected={this.props.board.background} />, this.colorDiv)
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.rearrangeLists(arrayMove(this.props.lists, oldIndex, newIndex))
  }

  render () {
    return (
      <Grid fluid className='board'>
        <Row>
          <Col xs={12} className='board-header'>
            <span className='board-title' onClick={this.handleNameClick}>{this.props.board.name}</span>
            <span onClick={() => this.props.toggleFavBoard(this.props.board.id)} className={'board-fav ' + (this.props.board.favorite ? 'board-fav--favorited' : '')}>
              {this.props.board.favorite ? <i className='fa fa-star' aria-hidden='true' /> : <i className='fa fa-star-o' aria-hidden='true' />}
            </span>
            <span className='board-color' onClick={this.handleColorClick} ref={c => { this.colorDiv = c }}>
              <span style={{background: this.props.board.background}} />
            </span>
          </Col>
        </Row>
        <Row>
          <SortableList axis='x' lists={this.props.lists} onSortEnd={this.onSortEnd} distance={5} />
          <CreateList handleClick={this.handleCreateListClick} />
        </Row>
      </Grid>
    )
  }
}

Board.propTypes = {
  lists: PropTypes.array,
  board: PropTypes.object,
  toggleFavBoard: PropTypes.func,
  openPopover: PropTypes.func,
  closePopover: PropTypes.func,
  renameBoard: PropTypes.func,
  createList: PropTypes.func,
  changeBoardColor: PropTypes.func,
  rearrangeLists: PropTypes.func
}

export default Board
