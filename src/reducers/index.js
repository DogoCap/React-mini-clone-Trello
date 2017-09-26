import {combineReducers} from 'redux'
import boards from './boards'
import lists from './lists'
import cards from './cards'
import popover from './popover'

const store = combineReducers({
  boards,
  lists,
  cards,
  popover
})

export default store
