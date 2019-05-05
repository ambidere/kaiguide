import React from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography
} from "react-simple-maps";
import events from '../../../data/events.json';
import world from '../../../data/world-50m.json';
import { GeoProjection } from 'd3-geo';
import ColorUtils, { MapInteractionState } from '../../../utils/ColorUtils';
import ReactTooltip from "react-tooltip"

const wrapperStyles : React.CSSProperties = {
    flexDirection : 'column',
    flex : 1,
    margin: "0 auto",
    backgroundColor: "#3498db"
}

export default class Map extends React.Component {
    getFillColorBasedOnState( interactionState : MapInteractionState, numericData : number ) {
        return ColorUtils.getFillColorBasedFromInteractionStateAndNumericData(interactionState, numericData);
    }

    render() {
        let eventsData : any = events;

        return (
            <div style={wrapperStyles}>
                <ComposableMap
                    projectionConfig={{
                        scale: 205,
                        rotation: [-11,0,0],
                    }}
                    width={980}
                    height={600}
                    style={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "#3498db",
                        overflow: "hidden"
                    }}>
                    <ZoomableGroup center={[0,20]} disablePanning>
                        <Geographies geography={world}>
                        {(geographies : any[], projection : GeoProjection) => geographies.map((geography, i) =>  (
                            <Geography
                                key={i}
                                data-tip={geography.properties.name}
                                geography={geography}
                                projection={projection}
                                style={{
                                    default: {
                                        fill: this.getFillColorBasedOnState('default', eventsData[geography.id]),
                                        stroke: "#607D8B",
                                        strokeWidth: 0.5,
                                        outline: "none",
                                    },
                                    hover: {
                                        fill: this.getFillColorBasedOnState('hover', eventsData[geography.id]),
                                        stroke: "#607D8B",
                                        strokeWidth: 0.5,
                                        outline: "none",
                                    },
                                    pressed: {
                                        fill: this.getFillColorBasedOnState('pressed', eventsData[geography.id]),
                                        stroke: "#607D8B",
                                        strokeWidth: 0.75,
                                        outline: "none",
                                    },
                                }}
                            />
                        ))}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
                <ReactTooltip></ReactTooltip>
            </div>
        );
    }
}