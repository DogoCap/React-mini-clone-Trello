import React from 'react'
import PropTypes from 'prop-types'

class TitleInput extends React.Component {
  static propTypes = {
    onSave: PropTypes.func,
    text: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.text = this.state.text
  }

  state = {
    text: this.props.text || ''
  }

  handleBlur = e => {
    this.props.onSave(e.target.value)
  }

  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handleSubmit = e => {
    if (e.which === 13) {
      this.props.onSave(e.target.value)
    } else if (e.which === 27) {
      this.props.onSave(this.text)
    }
  }

  render () {
    return (
      <div className='list-header-input'>
        <input
          autoFocus='true'
          type='text'
          onKeyDown={this.handleSubmit}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TitleInput
