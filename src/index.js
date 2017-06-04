import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'leaflet-css';
import Map from './components/Map';

const HelloBoss = props => <h1>{props.message}😎</h1>;

HelloBoss.propTypes = {
  message: PropTypes.string.isRequired
};

const App = () =>
  <div>
    <Map />
  </div>;

ReactDOM.render(<App />, document.getElementById('root'));
