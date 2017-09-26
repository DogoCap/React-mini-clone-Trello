import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../style/app.scss'
import BoardList from './boardsList'
import Board from '../containers/Board'
import Nav from '../components/common/Nav'
import Popover from '../containers/Popover'

const App = () => (
  <Router>
    <div className='trello-app'>
      <Nav />
      <Popover />
      <Route exact path='/' component={BoardList} />
      <Route path='/b/:id' component={Board} />
    </div>
  </Router>
)

export default App
