import Leaflet from 'leaflet';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Map extends Component {
  componentDidMount() {
    const LAT = this.props.lat || 40.416775;
    const LONG = this.props.long || -3.703790;
    const ID = this.props.id;
    const MyMap = Leaflet.map(ID);
    MyMap.setView([LAT, LONG], 13);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(MyMap);
  }
  render() {
    console.log('render');
    return (
      <div className={this.props.className} id={this.props.id} />
    );
  }

}

Map.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  lat: PropTypes.number,
  long: PropTypes.number
};

const MapStyled = styled(Map)`
  height: 500px;
`;
export default MapStyled;
