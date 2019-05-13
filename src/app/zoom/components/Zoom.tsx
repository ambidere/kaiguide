import React from 'react';
import './Zoom.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import ZoomProps from './ZoomProps';
import ReactTooltip from "react-tooltip"

export default class Zoom extends React.Component<ZoomProps> {
    render() {
        let { zoomIn, zoomOut, resetZoom } = this.props;

        return (
            <div className="zoom-buttons">
                <Button variant="link" onClick={() => zoomIn()} data-tip="Zoom In">
                    <FontAwesomeIcon icon={faPlus} inverse></FontAwesomeIcon>
                </Button>
                <Button variant="link" onClick={() => zoomOut()} data-tip="Zoom Out">
                    <FontAwesomeIcon icon={faMinus} inverse></FontAwesomeIcon>
                </Button>
                <Button variant="link" onClick={() => resetZoom()} data-tip="Reset">
                    <FontAwesomeIcon icon={faRedo} inverse></FontAwesomeIcon>
                </Button>
                <ReactTooltip></ReactTooltip>
            </div>
        );
    }
}