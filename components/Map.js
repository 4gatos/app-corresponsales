import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import MapPopUp from './MapPopUp';

mapboxgl.accessToken = 'pk.eyJ1IjoicGxhc28iLCJhIjoiY2puZG0weXZ1Mjl6aDNxcmZybXV0NmV6NCJ9.Vovat6h7DIDOWpa5j4P0_Q';

const defaultPopUpState = {
  isPopUpOpen: false,
  popUpTitle: null,
  popUpDescription: null,
  popUpRoute: null,
  popUpSlug: null,
  popUpImg: null,
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -3.7033387,
      lat: 40.4167278,
      zoom: 3,
      ...defaultPopUpState,
    };

    this.map = React.createRef();
    this.setPopUp = this.setPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.createMapMarkers = this.createMapMarkers.bind(this);

    this.markers = [];
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const { battles, correspondants } = this.props;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/basic-v9',
      center: [lng, lat],
      zoom,
    });

    map.on('move', () => {
      const { lng: mapLng, lat: mapLat } = map.getCenter();

      this.setState({
        lng: mapLng.toFixed(4),
        lat: mapLat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    this.createMapMarkers(battles, 'battle', map);
    // this.createMapMarkers(correspondants, 'correspondent', map);

    console.log(this.markers);

    map.fitBounds(this.markers, { padding: 60 });
  }

  setPopUp(item, route) {
    this.setState({
      isPopUpOpen: true,
      popUpTitle: item.name,
      popUpDescription: item.history,
      popUpRoute: route,
      popUpSlug: item.slug,
      popUpImg: item.mainImg,
    });
  }

  createMapMarkers(data, type, map) {
    data.forEach((item) => {
      if (item.geographicLat && item.geographicLng) {
        const el = document.createElement('div');
        el.className = `marker ${type}`;
        const marker = new mapboxgl.Marker(el)
          .setLngLat([item.geographicLng, item.geographicLat]).addTo(map);

        this.markers.push([item.geographicLng, item.geographicLat]);

        marker
          .getElement()
          .addEventListener('click', () => this.setPopUp(item, type), false);
      }
    });
  }

  closePopUp() {
    this.setState({ ...defaultPopUpState });
  }

  render() {
    const {
      isPopUpOpen,
      popUpTitle,
      popUpDescription,
      popUpRoute,
      popUpSlug,
      popUpImg,
    } = this.state;
    return [
      <div
        ref={(el) => { this.mapContainer = el; }}
        className="top right left bottom"
      />,
      isPopUpOpen && (
        <MapPopUp
          title={popUpTitle}
          description={popUpDescription}
          route={popUpRoute}
          slug={popUpSlug}
          closePopUp={this.closePopUp}
          popUpImg={popUpImg}
        />
      ),
    ];
  }
}

export default Map;
