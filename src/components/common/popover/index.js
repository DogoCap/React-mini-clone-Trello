import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import '../../../style/popover.scss'

class Popover extends React.Component {
  static propTypes = {
    popover: PropTypes.object,
    closePopover: PropTypes.func
  }

  style = () => {
    let top = this.props.popover.elementToStick.getBoundingClientRect().top
    if (!this.props.popover.over) {
      top += this.props.popover.elementToStick.offsetHeight
    }

    let width = 'auto'
    if (!this.props.popover.naturalSize) {
      width = this.props.popover.elementToStick.offsetWidth
    }

    return {
      display: 'block',
      left: this.props.popover.elementToStick.getBoundingClientRect().left,
      top,
      width
    }
  }

  componentWillMount () {
    document.addEventListener('click', this.handleClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClick, false)
  }

  handleClick = (e) => {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.closePopover()
    }
  }

  render () {
    return (
      <div
        className='new-popover'
        style={this.style()}
      >
        <div className='popover-header'>
          {this.props.popover.headline}
        </div>
        <div className='popover-body'>
          {this.props.popover.componentToRender}
        </div>
      </div>
    )
  }
}

export default Popover
