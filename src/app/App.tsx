import './App.css';
import React from 'react';
import MapContainer from './map/containers/MapContainer';
import SidebarContainer from './sidebar/containers/SidebarContainer';
import ZoomContainer from './zoom/containers/ZoomContainer';
import MapModalContainer from './modal/containers/MapModalContainer';

export default class App extends React.Component {

  render() {
    return (
      <div className="app" id="app-container">
        <MapModalContainer></MapModalContainer>
        <SidebarContainer></SidebarContainer>
        <main className="app-main" id="app-map">
          <ZoomContainer></ZoomContainer>
          <MapContainer></MapContainer>
        </main>
      </div>
    );
  }
}
