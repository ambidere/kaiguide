import { Action, Dispatch, AnyAction } from "redux";
import GeographyData from "../app/objects/GeographyData";
import GuestData from "../app/objects/GuestData";
// import something from '../../data/events.json'

export enum AppActionTypes {
    SELECT_GUEST = "SELECT_GUEST",
    ZOOM_IN = "ZOOM_IN",
    ZOOM_OUT = "ZOOM_OUT",
    SET_CENTER = "SET_CENTER",
    RESET_ZOOM = "RESET_ZOOM",
    SHOW_MODAL = "SHOW_MODAL",
    HIDE_MODAL = "HIDE_MODAL",
    SET_DETAILS_FOR_MODAL = "SET_DETAILS_FOR_MODAL"
}

export interface SelectGuestAction extends Action<typeof AppActionTypes.SELECT_GUEST> {
    payload : GuestData
}

export interface SetCenterAction extends Action<typeof AppActionTypes.SET_CENTER> {
    payload : [number, number]
}

export interface ZoomInAction extends Action<typeof AppActionTypes.ZOOM_IN> {}

export interface ZoomOutAction extends Action<typeof AppActionTypes.ZOOM_OUT> {}

export interface ResetZoomAction extends Action<typeof AppActionTypes.RESET_ZOOM> {}

export interface ShowModalAction extends Action<typeof AppActionTypes.SHOW_MODAL> {}

export interface HideModalAction extends Action<typeof AppActionTypes.HIDE_MODAL> {}

export interface SetDetailsForModalAction extends Action<typeof AppActionTypes.SET_DETAILS_FOR_MODAL> {
    payload : { geography : GeographyData, guestData : GuestData }
}

export type AppActions = SelectGuestAction | ZoomInAction | ZoomOutAction | ResetZoomAction | SetCenterAction
    | ShowModalAction | HideModalAction | SetDetailsForModalAction;

export function selectGuest(guest : GuestData) : SelectGuestAction {
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

export function resetZoom() : ResetZoomAction {
    return {
        type : AppActionTypes.RESET_ZOOM
    }
}

export function setCenter(center : [number, number]) : SetCenterAction {
    return {
        type : AppActionTypes.SET_CENTER,
        payload : center
    }
}

export function showModal() : ShowModalAction {
    return {
        type : AppActionTypes.SHOW_MODAL
    }
}

export function hideModal() : HideModalAction {
    return {
        type : AppActionTypes.HIDE_MODAL
    }
}

export function setDetailsForModal(details : { geography : any, guestData : any }) : SetDetailsForModalAction {
    return {
        type : AppActionTypes.SET_DETAILS_FOR_MODAL,
        payload : details
    }
}
