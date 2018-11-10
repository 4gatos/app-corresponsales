import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import MapPopUp from './MapPopUp';

mapboxgl.accessToken = 'pk.eyJ1IjoicGxhc28iLCJhIjoiY2puZG0weXZ1Mjl6aDNxcmZybXV0NmV6NCJ9.Vovat6h7DIDOWpa5j4P0_Q';

const battles = [
  {
    title: 'Batalla de Villar de los Navarros',
    description:
      'La batalla de Villar de los Navarros enfrentó a carlistas y liberales durante la primera guerra.',
    slug: 'villar-de-los-navarros',
    coords: [-1.0880680304, 41.1779158187],
  },
];

const defaultPopUpState = {
  isPopUpOpen: false,
  popUpTitle: null,
  popUpDescription: null,
  popUpRoute: null,
  popUpSlug: null,
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -1.0880680304,
      lat: 41.1779158187,
      zoom: 6,
      ...defaultPopUpState,
    };

    this.map = React.createRef();
    this.setPopUp = this.setPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

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

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

    battles.forEach((battle) => {
      const marker = new mapboxgl.Marker().setLngLat(battle.coords).addTo(map);

      marker
        .getElement()
        .addEventListener('click', () => this.setPopUp(battle), false);
    });
  }

  setPopUp(battle) {
    this.setState({
      isPopUpOpen: true,
      popUpTitle: battle.title,
      popUpDescription: battle.description,
      popUpRoute: 'battle',
      popUpSlug: battle.slug,
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
        />
      ),
    ];
  }
}

export default Map;
