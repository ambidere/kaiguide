import GeographyProperties from "./GeographyProperties";
import { Geometry } from "geojson";

export default interface GeographyData {
    type : string,
    geometry : Geometry,
    id : string,
    properties : GeographyProperties
}