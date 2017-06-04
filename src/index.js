import React from 'react';
import ReactDOM from 'react-dom';
import 'leaflet-css';
import Map from './components/Map';

const App = () =>
  <div>
    <Map lat={40.416775} long={-3.703790} id='myMapId' />
  </div>;

ReactDOM.render(<App />, document.getElementById('root'));
