import React from "react";
import Modal from "react-bootstrap/Modal";
import MapModalProps from "./MapModalProps";
import Button from "react-bootstrap/Button";
import './MapModal.css';

export default class MapModal extends React.Component<MapModalProps> {
    render() {
        let { isVisible, onClose } = this.props;

        return (
            <Modal
                show={isVisible}
                onHide={() => { onClose() }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    Wasuta (The World Standard)
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={() => { onClose() }}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}