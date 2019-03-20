import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import MapPopUp from './MapPopUp';
import { Link } from '../routes/routes';

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

    this.bounds = new mapboxgl.LngLatBounds();

    this.markers = [];
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const { battles, correspondants, newspapers, sources } = this.props;

    console.log(sources);

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

    battles && battles.length > 0 && this.createMapMarkers(battles, 'battle', map);
    correspondants && correspondants.length > 0 && this.createMapMarkers(correspondants, 'correspondent', map);
    newspapers && newspapers.length > 0 && this.createMapMarkers(newspapers, 'newspaper', map);
    sources && sources.length > 0 && this.createMapMarkers(sources, 'source', map);


    map.fitBounds(this.bounds, { padding: 60 });
  }

  setPopUp(item, route) {
    let description = item.history || item.historicDetails || item.description;
    console.log({ item });
    if (route === 'source' && item.sources && item.sources.length > 0) {
      description = (
        <div>
          { item.sources.map(({ slug, name }) => (
            <Link route={route} params={{ id: slug }}>
              <a className="link" style={{ display: 'block' }}>{name}</a>
            </Link>
          )) }
        </div>
      );
    }
    this.setState({
      isPopUpOpen: true,
      popUpTitle: item.name,
      popUpDescription: description,
      popUpRoute: route,
      popUpSlug: item.slug,
      popUpImg: item.mainImg,
    });
  }

  createMapMarkers(data, type, map) {
    data.forEach((item) => {
      if (
        (item.geographicLat && item.geographicLng)
        || (item.coordinates && item.coordinates.length > 0)
      ) {
        const el = document.createElement('div');
        el.className = `marker ${type}`;
        const marker = new mapboxgl.Marker(el);
        if (item.geographicLat && item.geographicLng) {
          marker.setLngLat([item.geographicLng, item.geographicLat]).addTo(map);
        } else {
          marker.setLngLat([item.coordinates[0][0], item.coordinates[0][1]]).addTo(map);
        }

        this.markers.push([item.geographicLng, item.geographicLat]);
        this.bounds.extend([item.geographicLng, item.geographicLat]);

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
