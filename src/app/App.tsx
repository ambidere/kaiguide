import React from 'react';
import './App.css';
import MapContainer from './map/containers/MapContainer';
import SidebarContainer from './sidebar/containers/SidebarContainer';
import Modal from 'react-modal';

export default class App extends React.Component {

  componentDidMount() {
    Modal.setAppElement('#app-container')
  }

  render() {
    return (
      <div className="app" id="app-container">
        <Modal isOpen={false}></Modal>
        <SidebarContainer></SidebarContainer>
        <main className="app-main" id="app-map">
          <MapContainer></MapContainer>
        </main>
      </div>
    );
  }
}
