import {v4 as uuid} from 'uuid'

const initialList = [
  {
    name: 'List 1',
    id: 1,
    board_id: 1
  },
  {
    name: 'List 2',
    id: 2,
    board_id: 1
  },
  {
    name: 'List 3',
    id: 3,
    board_id: 2
  },
  {
    name: 'List 4',
    id: 4,
    board_id: 2
  }
]

const list = (state = initialList, action) => {
  switch (action.type) {
    case 'UPDATE_LIST_NAME':
      return state.map(list => {
        return list.id === action.listId
          ? {...list, name: action.name}
          : list
      })
    case 'CREATE_LIST':
      const newBoard = {
        name: action.name,
        id: uuid(),
        board_id: action.id
      }
      return state.concat(newBoard)
    case 'DELETE_LIST':
      return state.filter(list => list.id !== action.listId)
    case 'REARRANGE_LISTS':
      const ids = action.newLists.map(list => list.id)
      return state.filter(list => ids.indexOf(list.id) === -1).concat(action.newLists)
    default:
      return state
  }
}

export default list
