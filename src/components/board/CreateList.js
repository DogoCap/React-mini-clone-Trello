import React from 'react'
import PropTypes from 'prop-types'
import {Col} from 'react-bootstrap'

class CreateList extends React.Component {
  static propTypes = {
    handleClick: PropTypes.func
  }
  render () {
    return (
      <Col xs={2} className='create-list'>
        <a href='#' onClick={this.props.handleClick}>Create New List...</a>
      </Col>
    )
  }
}

export default CreateList
