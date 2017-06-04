import Leaflet from 'leaflet';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      long: this.props.long
    };
  }
  componentDidMount() {
    const LAT = this.state.lat || 40.416775;
    const LONG = this.state.long || -3.703790;
    const ID = this.props.id;
    this.map = Leaflet.map(ID);
    this.map.setView([LAT, LONG], 13);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.map);
    this.map.on('moveend', () => {
      const center = this.map.getCenter();
      this.props.handleMove(center.lat, center.lng);
    });

    this.forceUpdate();
  }
  render() {
    return (
      <div className={this.props.className} id={this.props.id}>
        {this.map && this.props.children}
      </div>
    );
  }

}

Map.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  handleMove: PropTypes.func.isRequired,
  lat: PropTypes.number,
  long: PropTypes.number
};

const MapStyled = styled(Map)`
  height: 500px;
`;
export default MapStyled;
