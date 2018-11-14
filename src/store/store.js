import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer/tabReducer'

const Store = new createStore(reducer,applyMiddleware(promiseMiddleware()))

export default Store