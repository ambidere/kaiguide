

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AppActions, AppActionTypes } from '../actions';
import { GuestsData } from '../objects/GuestsData';

export interface AppState {
  selectedGuestData : GuestsData | null
}

const initialState : AppState = {
  selectedGuestData : null
}

const appReducer = (state = initialState, action : AppActions) : AppState => {
    switch (action.type) {
      case AppActionTypes.SELECT_GUEST:
        return {...state, selectedGuestData : action.payload}
      default:
        return state
    }
}

const initStore = createStore(appReducer, applyMiddleware(thunk, logger));
export default initStore;

