import React from 'react';
import './App.css';
import MapContainer from './map/containers/MapContainer';
import SidebarContainer from './sidebar/containers/SidebarContainer';

export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <SidebarContainer></SidebarContainer>
        <main className="app-main">
          <MapContainer></MapContainer>
        </main>
      </div>
    );
  }
}
