import Event from "./Event";

export default interface GuestData {
    enName : string,
    jpName : string,
    description: string,
    events : {
        [key : string] : Event[]
    }
}