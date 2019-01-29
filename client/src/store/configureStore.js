import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

const configureStore = state => createStore( rootReducer, state, applyMiddleware(promise, thunk) )

export default configureStore
