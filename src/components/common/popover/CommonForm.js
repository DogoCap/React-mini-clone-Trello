import React from 'react'
import PropTypes from 'prop-types'
import {Button, FormControl} from 'react-bootstrap'

class CommonForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    btn: PropTypes.string,
    title: PropTypes.string
  }

  state = {
    text: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.text.trim().length === 0) {
      return false
    }
    this.props.onSubmit(this.state.text)
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='input'>{this.props.title}:</label>
        <FormControl type='text' id='input' autoFocus='true' ref={c => { this.input = c }} bsSize='sm' onChange={this.handleChange} placeholder={this.props.placeholder} />
        <Button bsStyle='primary' type='submit' bsSize='small'>{this.props.btn}</Button>
      </form>
    )
  }
}

export default CommonForm
