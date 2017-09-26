import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Popover from '../components/common/popover'
import {closePopover} from '../actions/popover'

const PopoverContainer = ({popover, closePopover}) => {
  if (popover.opened) {
    return <Popover popover={popover} closePopover={closePopover} />
  } else {
    return (null)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    popover: state.popover
  }
}

PopoverContainer.propTypes = {
  popover: PropTypes.object,
  closePopover: PropTypes.func
}

export default connect(mapStateToProps, {closePopover})(PopoverContainer)
