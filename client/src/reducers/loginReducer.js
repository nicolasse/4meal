import {
  LOGGED,
  LOGOUT
} from '../actions/loginActions'

const INITIAL_STATE = {
  user: null
}

const loginReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case LOGGED: 
      return {
        user: action.payload
      }
    case LOGOUT:
      return {
        user: null
      }
    default: return state
  }
}

export default loginReducer
