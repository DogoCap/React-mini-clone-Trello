export const openPopover = (headline, componentToRender, elementToStick, over = true, naturalSize = true) => {
  return {
    type: 'OPEN_POPVOER',
    elementToStick,
    headline,
    componentToRender,
    over,
    naturalSize
  }
}

export const closePopover = () => {
  return {
    type: 'CLOSE_POPVOER'
  }
}
