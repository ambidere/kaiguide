import React from "react";
import Modal from "react-bootstrap/Modal";
import MapModalProps from "./MapModalProps";
import Button from "react-bootstrap/Button";
import './MapModal.css';
import { Geography } from "react-simple-maps";

export default class MapModal extends React.Component<MapModalProps> {
    renderFlag() {
        let { details } = this.props;
        if (!details && !details.geography.properties) {
            return (<React.Fragment></React.Fragment>);
        }
        let { properties } = details.geography;
        return (
            <h4>
                <img src={`/flags/${properties.name.toLowerCase()}.svg`} width={20} height={20} alt={properties.name}></img>
                {properties.name}
            </h4>
        );
    }

    render() {
        let { isVisible, onClose, details } = this.props;
        
        if (details) {
            let { geography, guestData } = details;
            let { events, enName, jpName } = guestData;
            return (
                <Modal
                    show={isVisible}
                    onHide={() => { onClose() }}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        {jpName} ({enName})
                    </Modal.Header>
                    <Modal.Body>
                        { this.renderFlag() }
                        <p>
                            {JSON.stringify(events[geography.id])}
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={() => { onClose() }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            );
        }
        else {
            return <React.Fragment/>;
        }
    }
}