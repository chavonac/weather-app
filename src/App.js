import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Buenos Aires,ar",
  "Mexico,mex",
  "Bogota,col",
  "Washington,us",
  "Barcelona,es",
  "Madrid,es",
  "Lima,pe"
];

class App extends Component {

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
          onSelectLocation={this.handleSelectionLocation} />
      </div>
    );
  }
}

export default App;
