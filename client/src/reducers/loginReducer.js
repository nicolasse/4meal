import {
  FETCH_CREDENTIALS_STARTED,
  FETCH_CREDENTIALS_SUCCESS,
  FETCH_CREDENTIALS_FAILURE,
} from '../actions/loginActions'

const INITIAL_STATE = {
  error: null,
  loading: false,
  credentials: {}
}

const loginReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case FETCH_CREDENTIALS_STARTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CREDENTIALS_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: action.payload
      }
    case FETCH_CREDENTIALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default: return state
  }
}

export default loginReducer
