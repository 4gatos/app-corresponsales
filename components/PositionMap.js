import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';

mapboxgl.accessToken = 'pk.eyJ1IjoicGxhc28iLCJhIjoiY2puZG0weXZ1Mjl6aDNxcmZybXV0NmV6NCJ9.Vovat6h7DIDOWpa5j4P0_Q';

class PositionMap extends Component {
  componentDidMount() {
    const {
      lng, lat, type, zoom,
    } = this.props;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/basic-v9',
      center: [lng, lat],
      zoom,
    });

    const el = document.createElement('div');
    el.className = `marker ${type}`;
    new mapboxgl.Marker(el)
      .setLngLat([lng, lat]).addTo(map);
  }

  render() {
    return (
      <div
        ref={(el) => { this.mapContainer = el; }}
      />
    );
  }
}

PositionMap.propTypes = {
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default PositionMap;
