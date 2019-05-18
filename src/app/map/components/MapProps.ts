import GuestData from "../../objects/GuestData";
import GeographyData from "../../objects/GeographyData";

export default interface MapProps {
    selectedGuestData? : GuestData,
    zoomDegree : number,
    center: [number, number],
    setCenter : (center : [number, number]) => void,
    showDetails : (details : { geography : GeographyData, guestData : GuestData }) => void
}