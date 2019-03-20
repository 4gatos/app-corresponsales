import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Router from 'next/router';
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

  componentDidMount() {
    if (!localStorage.getItem('onboarding')) {
      Router.push('/inicio');
    }
  }

  render() {
    const {
      battles, correspondants, newspapers, sources,
    } = this.props;
    return (
      <div className="main-map">
        {process.browser ? <Map sources={sources} battles={battles} correspondants={correspondants} newspapers={newspapers} /> : null}
      </div>
    );
  }
}

MapView.getInitialProps = async () => {
  const battleRes = await fetch(`${config.apiUrl}/battles/basic`);
  const battles = await battleRes.json();
  const correspondantsRes = await fetch(`${config.apiUrl}/correspondants/basic`);
  const correspondants = await correspondantsRes.json();
  const newspapersRes = await fetch(`${config.apiUrl}/newspapers/basic`);
  const newspapers = await newspapersRes.json();
  const sourcesRes = await fetch(`${config.apiUrl}/group-sources`);
  const sources = await sourcesRes.json();

  return {
    battles,
    correspondants,
    newspapers,
    sources,
  };
};

MapView.propTypes = {
  battles: PropTypes.arrayOf(PropTypes.object).isRequired,
  correspondants: PropTypes.arrayOf(PropTypes.object).isRequired,
  newspapers: PropTypes.arrayOf(PropTypes.object).isRequired,
  sources: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MapView;
