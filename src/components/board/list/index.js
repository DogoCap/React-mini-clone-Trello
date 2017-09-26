import React from 'react'
import PropTypes from 'prop-types'
import {Col, Row} from 'react-bootstrap'

import '../../../style/list.scss'
import Card from '../../../containers/Card'
import TitleInput from './TitleInput'
import CommonForm from '../../common/popover/CommonForm'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

const SortableItem = SortableElement(({card}) =>
  <Card cardId={card.id} />
)

const SortableList = SortableContainer(({cards}) =>
  <div className='list-cards'>
    {cards.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} card={value} />
    ))}
  </div>
)

class List extends React.Component {
  static propTypes = {
    list: PropTypes.object,
    updateListName: PropTypes.func,
    deleteList: PropTypes.func,
    openPopover: PropTypes.func,
    createCard: PropTypes.func,
    cards: PropTypes.array,
    rearrangeCards: PropTypes.func
  }

  state = {
    isEditingTitle: false
  }

  handleSave = (name) => {
    this.setState({isEditingTitle: false})
    const newName = name.trim()
    if (newName !== name || newName.length > 0) {
      this.props.updateListName(this.props.list.id, name)
    }
  }

  handleRemoveClick = (listId) => {
    let confirm = window.confirm('Are you sure you want to delete this list?')
    if (confirm) {
      this.props.deleteList(this.props.list.id)
    }
  }

  handleAddCardClick = (e) => {
    e.preventDefault()
    this.props.openPopover('Create New Card', <CommonForm onSubmit={(name) => { this.props.createCard(this.props.list.id, name) }} btn='Add' placeholder='Card Name' title='Name' />, e.target)
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.rearrangeCards(arrayMove(this.props.cards, oldIndex, newIndex))
  }

  render () {
    return (
      <Col xs={2}>
        <div className='board-list'>
          <Row className='list-header'>
            <Col xs={10} className='list-header-title'>
              {!this.state.isEditingTitle
                ? <div onClick={() => { this.setState({isEditingTitle: true}) }} className='list-header-title--title'>{this.props.list.name}</div>
                : <TitleInput text={this.props.list.name} onSave={this.handleSave} />
              }
            </Col>
            <Col xs={2} className='list-header-delete'>
              <i className='fa fa-trash' aria-hidden='true' onClick={this.handleRemoveClick} />
            </Col>
          </Row>
          <SortableList lockToContainerEdges lockAxis='y' cards={this.props.cards} onSortEnd={this.onSortEnd} />
          <div className='list-footer'>
            <a href='#' onClick={this.handleAddCardClick}>Add Card</a>
          </div>
        </div>
      </Col>
    )
  }
}

export default List
