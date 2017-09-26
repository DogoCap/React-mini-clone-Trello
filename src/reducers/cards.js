import {v4 as uuid} from 'uuid'
const initialCard = [
  {
    name: 'Card 1',
    id: 1,
    list_id: 1
  },
  {
    name: 'Card 2',
    id: 2,
    list_id: 1
  },
  {
    name: 'Card 3',
    id: 3,
    list_id: 1
  },
  {
    name: 'Card 4',
    id: 4,
    list_id: 2
  },
  {
    name: 'Card 5',
    id: 5,
    list_id: 2
  },
  {
    name: 'Card 6',
    id: 6,
    list_id: 2
  },
  {
    name: 'Card 7',
    id: 7,
    list_id: 3
  },
  {
    name: 'Card 8',
    id: 8,
    list_id: 3
  },
  {
    name: 'Card 9',
    id: 9,
    list_id: 3
  },
  {
    name: 'Card 10',
    id: 10,
    list_id: 4
  },
  {
    name: 'Card 11',
    id: 11,
    list_id: 4
  },
  {
    name: 'Card 12',
    id: 12,
    list_id: 4
  }
]

const card = (state = initialCard, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      const newCard = {
        name: action.name,
        id: uuid(),
        list_id: action.listId
      }
      return state.concat(newCard)
    case 'DELETE_CARD':
      return state.filter(card => card.id !== action.id)
    case 'REARRANGE_CARDS':
      const ids = action.newCards.map(card => card.id)
      return state.filter(card => ids.indexOf(card.id) === -1).concat(action.newCards)
    default:
      return state
  }
}

export default card
