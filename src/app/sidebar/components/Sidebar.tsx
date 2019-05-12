import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './Sidebar.css'
import SidebarProps from './SidebarProps';

export default class Sidebar extends Component<SidebarProps> {
    render() {
        let { loadMapData } = this.props;
        return (
            <aside className="app-sidebar">
                <h3>Kaiguide</h3>
                <ListGroup>
                    <ListGroup.Item>
                        <Button onClick={() => loadMapData('wasuta')} block>わーすた</Button>
                    </ListGroup.Item>
                </ListGroup>
            </aside>
        );
    }

}