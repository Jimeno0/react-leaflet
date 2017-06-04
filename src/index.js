import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'leaflet-css';
import Map from './components/Map';
import Coordinates from './Coordinates';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40.416775,
      long: -3.703790
    };
  }
  handleMove(lat, long) {
    this.setState({ lat, long });
  }
  render() {
    return (

      <div>
        <Map lat={this.state.lat} long={this.state.long} id='myMapId'handleMove={(lat, log) => this.handleMove(lat, log)}>
          <Coordinates lat={this.state.lat} long={this.state.long} />
        </Map>
      </div>
    );
  }


}
ReactDOM.render(<App />, document.getElementById('root'));
