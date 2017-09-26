import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import '../../style/nav.scss'

const Nav = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Trello</Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)

export default Nav
