import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import config from '../config/index';

let Map;
if (process.browser) {
  Map = dynamic(() => import('../components/Map'));
}

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { battles, correspondants } = this.props;
    return (
      <div className="main-map">
        {process.browser ? <Map battles={battles} correspondants={correspondants} /> : null}
      </div>
    );
  }
}

MapView.getInitialProps = async () => {
  const battleRes = await fetch(`${config.apiUrl}/battles/basic`);
  const battles = await battleRes.json();
  const correspondantsRes = await fetch(`${config.apiUrl}/correspondants/basic`);
  const correspondants = await correspondantsRes.json();

  return {
    battles,
    correspondants,
  };
};

MapView.propTypes = {
  battles: PropTypes.arrayOf(PropTypes.object).isRequired,
  correspondants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MapView;
