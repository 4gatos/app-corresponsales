import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';

mapboxgl.accessToken = 'pk.eyJ1IjoicGxhc28iLCJhIjoiY2puZG0weXZ1Mjl6aDNxcmZybXV0NmV6NCJ9.Vovat6h7DIDOWpa5j4P0_Q';

class PositionMap extends Component {
  componentDidMount() {
    const {
      lng, lat, type, zoom, coordinates,
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

    if (coordinates) {
      map.on('load', () => {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates,
              },
            },
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#00A8E1',
            'line-opacity': 0.75,
            'line-width': 5,
          },
        });
      });
    } else {
      map.flyTo({ center: [lng, lat] });
    }
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
