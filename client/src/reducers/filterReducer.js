import {
  SELECT_INGREDIENT,
  REMOVE_INGREDIENT,

} from '../actions/filterActions'


const filterReducer = ( state = [], action ) => {
  switch(action.type){
    case SELECT_INGREDIENT:
      return [ ...state, action.ingredient ]
    case REMOVE_INGREDIENT:
      return state.filter( ingredient => ingredient._id !== action.id )
    default: return  state
  }
}

export default filterReducer
