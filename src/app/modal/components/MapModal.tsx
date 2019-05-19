import React from "react";
import Modal from "react-bootstrap/Modal";
import MapModalProps from "./MapModalProps";
import Button from "react-bootstrap/Button";
import './MapModal.css';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
import Event from "../../objects/Event";
import Popover from "react-bootstrap/Popover";

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
            <CardDeck>
                { eventsForSelectedCountry.map((event, index) => (
                        // <p key={`${geography.id}_${index}`}>{JSON.stringify(event)}</p>
                        <Card>
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{`${event.dateStart} - ${event.dateEnd}`}</Card.Subtitle>
                                <Card.Text>
                                    {event.location}
                                </Card.Text>
                                <Card.Link href={event.link} target="_blank">Website</Card.Link>
                            </Card.Body>
                        </Card>
                    )) }
            </CardDeck>
            
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
                        {jpName} ({enName})
                    </Modal.Header>
                    <Modal.Body>
                        { this.renderFlag() }
                        { this.renderIndividualEvents() }
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