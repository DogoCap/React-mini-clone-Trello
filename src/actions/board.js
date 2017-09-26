export const toggleFavBoard = (boardId) => {
  return {
    type: 'TOGGLE_FAV_BOARD',
    boardId
  }
}

export const createBoard = name => {
  return {
    type: 'CREATE_BOARD',
    name
  }
}

export const renameBoard = (id, name) => {
  return {
    type: 'RENAME_BOARD',
    name,
    id
  }
}

export const changeBoardColor = (id, color) => {
  return {
    type: 'CHANGE_BOARD_COLOR',
    id,
    color
  }
}
