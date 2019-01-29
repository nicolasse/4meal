import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import loginReducer from './loginReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  searchReducer,
  loginReducer,
  filterReducer
})

export default rootReducer
