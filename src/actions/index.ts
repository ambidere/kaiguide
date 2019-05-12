import { Action, Dispatch, AnyAction } from "redux";
import { GuestsData } from "../objects/GuestsData";
// import something from '../../data/events.json'

export enum AppActionTypes {
    SELECT_GUEST = "SELECT_GUEST"
}

export interface SelectGuestAction extends Action<typeof AppActionTypes.SELECT_GUEST> {
    payload : GuestsData
}

export type AppActions = SelectGuestAction;

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

