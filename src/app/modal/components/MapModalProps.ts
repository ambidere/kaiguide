import GuestData from "../../objects/GuestData";
import GeographyData from "../../objects/GeographyData";

export default interface MapModalProps {
    isVisible : boolean,
    onClose : () => void,
    details : { geography : GeographyData, guestData : GuestData }
}