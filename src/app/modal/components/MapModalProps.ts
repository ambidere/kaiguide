export default interface MapModalProps {
    isVisible : boolean,
    onClose : () => void,
    details : { geography : any, guestData : any }
}