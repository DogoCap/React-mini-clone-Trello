export const updateListName = (listId, name) => {
  return {
    type: 'UPDATE_LIST_NAME',
    listId,
    name
  }
}

export const createList = (listId, name) => {
  return {
    type: 'CREATE_LIST',
    id: listId,
    name
  }
}

export const deleteList = (listId) => {
  return {
    type: 'DELETE_LIST',
    listId
  }
}

export const rearrangeLists = (newLists) => {
  return {
    type: 'REARRANGE_LISTS',
    newLists
  }
}
