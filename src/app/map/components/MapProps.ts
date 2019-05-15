import { GuestsData } from "../../../objects/GuestsData";

export default interface MapProps {
    selectedGuestData? : GuestsData,
    zoomDegree : number,
    center: [number, number],
    setCenter : (center : [number, number]) => void,
    showDetails : (details : { geography : any, guestData : any }) => void
}