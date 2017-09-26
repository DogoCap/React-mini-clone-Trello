import {v4 as uuid} from 'uuid'

import {defaultColor} from '../config/boardColors'

const initialBoard = [
  {
    name: 'Board 1',
    id: 1,
    favorite: false,
    background: defaultColor()
  },
  {
    name: 'Board 2',
    id: 2,
    favorite: true,
    background: defaultColor()
  }
]

const board = (state = initialBoard, action) => {
  switch (action.type) {
    case 'TOGGLE_FAV_BOARD':
      return state.map(board => {
        return board.id === action.boardId
          ? {...board, favorite: !board.favorite}
          : board
      })
    case 'CHANGE_BOARD_COLOR':
      return state.map(board => {
        return board.id === action.id
          ? {...board, background: action.color}
          : board
      })
    case 'CREATE_BOARD':
      const newBoard = {
        name: action.name,
        id: uuid(),
        favorite: false,
        background: defaultColor()
      }
      return state.concat(newBoard)
    case 'RENAME_BOARD':
      const boardIndex = state.findIndex(board => board.id === action.id)
      const board = Object.assign({}, state[boardIndex])
      board.name = action.name
      return [
        ...state.slice(0, boardIndex),
        board,
        ...state.slice(boardIndex + 1)
      ]
    default:
      return state
  }
}

export default board
