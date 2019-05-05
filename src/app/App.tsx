import React from 'react';
import './App.css';
import Map from './map/components/Map';
import Sidebar from './sidebar/components/Sidebar';



export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Sidebar></Sidebar>
        <main className="app-main">
          <Map></Map>
        </main>
      </div>
    );
  }
}
