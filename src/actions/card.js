export const createCard = (listId, name) => {
  return {
    type: 'CREATE_CARD',
    listId,
    name
  }
}

export const deleteCard = (cardId) => {
  return {
    type: 'DELETE_CARD',
    id: cardId
  }
}

export const rearrangeCards = (newCards) => {
  return {
    type: 'REARRANGE_CARDS',
    newCards
  }
}
