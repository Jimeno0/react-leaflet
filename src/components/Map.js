import Leaflet from 'leaflet';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Map extends Component {
  componentDidMount() {
    const MyMap = Leaflet.map('mapid');
    MyMap.setView([40.416775, -3.703790], 13);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(MyMap);
  }
  render() {
    return (
      <div className={this.props.className} id='mapid' />
    );
  }

}

Map.propTypes = {
  className: PropTypes.string.isRequired
};

const MapStyled = styled(Map)`
  height: 500px;
`;
export default MapStyled;
