import { createStore } from 'redux'
import { combineReducers } from 'redux'
import todomd from '../modules/todomodule'
const rootReducer = combineReducers({ todomd })

const store = createStore(rootReducer)

export default store
