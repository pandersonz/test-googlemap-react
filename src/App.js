import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
const loadGoogleMapsApi = require('load-google-maps-api');

loadGoogleMapsApi(Option[key]="AIzaSyCl6L-H0dwFPRbbynu1oOyTIM0mT0nGh60").then(function (googleMaps) {
  new googleMaps.Map(document.querySelector('.map'), {
    center: {
      lat: 40.7484405,
      lng: -73.9944191
    },
    zoom: 12
  })
}).catch(function (error) {
  console.error(error)
})
class App extends Component {
  render() {
    return (
  
  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        
        </p>
        <div className="map"></div>
      </div>
    );
  }
}

export default App;
