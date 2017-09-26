import React from 'react'
import PropTypes from 'prop-types'

import colors from '../../config/boardColors'

const colorskeys = Object.keys(colors)

const ChangeColor = ({colorSelected, onClick}) => (
  <ul className='change-board-color'>
    {colorskeys.map((color, index) => {
      const liItem = colorSelected === colors[color] ? <i className='fa fa-check' aria-hidden='true' /> : null
      return <li onClick={() => { onClick(colors[color]) }} key={index} style={{background: colors[color]}}>{liItem}</li>
    })}
  </ul>
)

ChangeColor.propTypes = {
  colorSelected: PropTypes.string,
  onClick: PropTypes.func
}

export default ChangeColor
