

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AppActions, AppActionTypes } from '../actions';
import { GuestsData } from '../objects/GuestsData';

export interface AppState {
  selectedGuestData : GuestsData | null,
  zoomDegree : number
}

const initialState : AppState = {
  selectedGuestData : null,
  zoomDegree : 3
}

const appReducer = (state = initialState, action : AppActions) : AppState => {
    switch (action.type) {
      case AppActionTypes.SELECT_GUEST:
        return {...state, selectedGuestData : action.payload}
      case AppActionTypes.ZOOM_IN:
        return {...state, zoomDegree : state.zoomDegree < 6 ? state.zoomDegree + 0.5 : state.zoomDegree}
      case AppActionTypes.ZOOM_OUT:
        return {...state, zoomDegree : state.zoomDegree > 1 ? state.zoomDegree - 0.5 : state.zoomDegree}
      default:
        return state
    }
}

const initStore = createStore(appReducer, applyMiddleware(thunk, logger));
export default initStore;

