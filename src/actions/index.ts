import { Action, Dispatch, AnyAction } from "redux";
import { GuestsData } from "../objects/GuestsData";
// import something from '../../data/events.json'

export enum AppActionTypes {
    SELECT_GUEST = "SELECT_GUEST",
    ZOOM_IN = "ZOOM_IN",
    ZOOM_OUT = "ZOOM_OUT"
}

export interface SelectGuestAction extends Action<typeof AppActionTypes.SELECT_GUEST> {
    payload : GuestsData
}

export interface ZoomInAction extends Action<typeof AppActionTypes.ZOOM_IN> {}

export interface ZoomOutAction extends Action<typeof AppActionTypes.ZOOM_OUT> {}

export type AppActions = SelectGuestAction | ZoomInAction | ZoomOutAction;

export function selectGuest(guest : GuestsData) : SelectGuestAction {
    return {
        type : AppActionTypes.SELECT_GUEST,
        payload : guest
    }
}

export function doLoadMapData(guest : string) {
    return async (dispatch : Dispatch<AnyAction>) => {
        // console.log(something);
        fetch('events.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data[guest]);
                dispatch(selectGuest(data[guest]));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function zoomIn() : ZoomInAction {
    return {
        type : AppActionTypes.ZOOM_IN
    }
}

export function zoomOut() : ZoomOutAction {
    return {
        type : AppActionTypes.ZOOM_OUT
    }
}

