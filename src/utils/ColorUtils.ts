import { scaleLinear, ScaleLinear } from "d3-scale";
import { COLOR_DOMAIN_VALUES, DEFAULT_COLOR, NOT_YET_ATTENDED_DEFAULT, ATTENDING_DEFAULT, ATTENDED_DEFAULT, ATTENDING_HOVER, ATTENDED_HOVER, NOT_YET_ATTENDED_HOVER } from "../const/ColorConstants";

export type MapInteractionState = 'default' | 'hover' | 'pressed';

export interface MapStateInterpolatedStyles {
    default : ScaleLinear<string, string>,
    hover : ScaleLinear<string, string>,
    pressed : ScaleLinear<string, string>
}

const domainedScaleLinear = () => {
    return scaleLinear<string>().domain(COLOR_DOMAIN_VALUES);
}

export const ColorMapFromInteractionState : MapStateInterpolatedStyles = {
    default : domainedScaleLinear().range([NOT_YET_ATTENDED_DEFAULT, ATTENDING_DEFAULT, ATTENDED_DEFAULT]),
    hover : domainedScaleLinear().range([NOT_YET_ATTENDED_HOVER, ATTENDING_HOVER, ATTENDED_HOVER]),
    pressed : domainedScaleLinear().range([DEFAULT_COLOR, ATTENDING_DEFAULT, ATTENDED_DEFAULT]),
};

const getFillColorBasedFromInteractionStateAndNumericData = (interactionState : MapInteractionState, numericData : number) => {
    let scale : ScaleLinear<string, string> = ColorMapFromInteractionState[interactionState];
    console.log(scale(numericData) ? scale(numericData) : DEFAULT_COLOR);
    return scale(numericData) ? scale(numericData) : DEFAULT_COLOR;
}

export default {
    getFillColorBasedFromInteractionStateAndNumericData
}