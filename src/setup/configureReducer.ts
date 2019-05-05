

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState = {}

const appReducer = (state = initialState, action : any) => {
    switch (action.type) {
      default:
        return state
    }
}

// const initStore = (initState = { appReducer: initialState }) => {
//     return createStore(combineReducers({ appReducer }), initState)
// }
const initStore = createStore(combineReducers({ appReducer }), applyMiddleware(thunk, logger));
export default initStore;

