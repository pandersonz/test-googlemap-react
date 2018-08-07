import React, { Component } from 'react';
import { GoogleMap, Marker } from "../react-google-maps-master"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
  
  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    
    <MyMapComponent isMarkerShown />// Map with a Marker
    <MyMapComponent isMarkerShown={false} />// Just only Map
        </p>
      </div>
    );
  }
}

export default App;
