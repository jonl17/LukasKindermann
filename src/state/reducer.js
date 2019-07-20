import { SET_DEVICE } from "./actions"

const initialState = {
  device: `browser`,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      return { ...state }
    default:
      return state
  }
}
