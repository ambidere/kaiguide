

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { AppActions, AppActionTypes } from '../actions';
import GeographyData from '../app/objects/GeographyData';
import GuestData from '../app/objects/GuestData';

export interface AppState {
  selectedGuestData : GuestData | null,
  zoomDegree : number,
  center : [number, number],
  isModalVisible : boolean,
  details : { geography : GeographyData, guestData : GuestData }
}

const initialState : AppState = {
  selectedGuestData : null,
  zoomDegree : 1,
  center : [0, 20],
  isModalVisible : false,
  details : null
}

const appReducer = (state = initialState, action : AppActions) : AppState => {
    switch (action.type) {
      case AppActionTypes.SELECT_GUEST:
        return {...state, selectedGuestData : action.payload};
      case AppActionTypes.ZOOM_IN:
        return {...state, zoomDegree : state.zoomDegree < 10 ? state.zoomDegree + 0.5 : state.zoomDegree};
      case AppActionTypes.ZOOM_OUT:
        return {...state, zoomDegree : state.zoomDegree > 1 ? state.zoomDegree - 0.5 : state.zoomDegree};
      case AppActionTypes.SET_CENTER:
        return {...state, center : action.payload};
      case AppActionTypes.RESET_ZOOM:
        return {...state, zoomDegree : 1, center : [0,20]};
      case AppActionTypes.SHOW_MODAL:
        return {...state, isModalVisible : true}
      case AppActionTypes.HIDE_MODAL:
        return {...state, isModalVisible : false}
      case AppActionTypes.SET_DETAILS_FOR_MODAL:
        return {...state, details : action.payload}
      default:
        return state
    }
}

const initStore = createStore(appReducer, applyMiddleware(thunk, logger));
export default initStore;

