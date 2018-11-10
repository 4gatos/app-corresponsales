import React, { Component } from 'react';
import dynamic from 'next/dynamic';

let Map;
if (process.browser) {
  Map = dynamic(() => import('../components/Map'))
}

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-map">
        {process.browser ? <Map /> : null}
      </div>
    );
  }
}

export default MapView;
