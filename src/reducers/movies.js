import { SET_MOVIES } from '../actions/movie'

export default (state = null, {type, payload}) => {
  switch (type) {

    case SET_MOVIES:
      return payload
      
    default:
      return state
  }
}