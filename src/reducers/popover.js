const initialState = {
  elementToStick: null,
  headline: null,
  componentToRender: null,
  over: true,
  opened: false,
  naturalSize: true
}

const popover = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_POPVOER':
      return {
        headline: action.headline,
        elementToStick: action.elementToStick,
        componentToRender: action.componentToRender,
        over: action.over,
        opened: true,
        naturalSize: action.naturalSize
      }
    case 'CLOSE_POPVOER':
      return initialState
    default:
      return state
  }
}

export default popover
