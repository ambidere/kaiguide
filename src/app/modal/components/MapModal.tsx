import React from "react";
import Modal from "react-bootstrap/Modal";
import MapModalProps from "./MapModalProps";
import Button from "react-bootstrap/Button";
import './MapModal.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Event from "../../objects/Event";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default class MapModal extends React.Component<MapModalProps> {
    renderFlag() {
        let { details } = this.props;
        if (!details && !details.geography.properties) {
            return (<React.Fragment></React.Fragment>);
        }
        let { properties } = details.geography;
        return (
            <h4>
                <img src={this.generateLink(properties.name)} width={20} height={20} alt={properties.name}></img>
                {properties.name}
            </h4>
        );
    }

    generateLink(name : string) {
        let newName = name.toLowerCase().replace(" ", "-");
        return `/flags/${newName}.svg`;
    }

    renderIndividualEvents() {
        let { details } = this.props;
        let { geography, guestData } = details;
        let eventsForSelectedCountry : Event[] = guestData.events[geography.id];
        return (
            <ListGroup variant="flush">
                { eventsForSelectedCountry.map((event, index) => (
                    <ListGroup.Item key={index}>
                        <a href={event.link} target="_blank" style={{ fontSize : 12 }}>{event.name}</a><br/>
                        <span className="text-muted" style={{ fontSize : 10 }}>{`${event.dateStart} - ${event.dateEnd}`}</span><br/>
                        <span className="text-muted" style={{ fontSize : 10 }}>{event.location}</span>
                    </ListGroup.Item>)
                )}
            </ListGroup>
        );
    }

    render() {
        let { isVisible, onClose, details } = this.props;
        
        if (details) {
            let { guestData } = details;
            let { enName, jpName } = guestData;
            console.log(details.geography);
            return (
                <Modal
                    show={isVisible}
                    onHide={() => { onClose() }}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header style={{ fontWeight : 'bold' }} closeButton>
                        {jpName} ({enName}) {this.renderFlag()}
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    { this.renderIndividualEvents() }
                                </Col>
                                <Col lg={4}>
                                    about wasuta
                                </Col>
                            </Row>
                        </Container>
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