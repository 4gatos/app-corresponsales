import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: '',
    };
  }

  render() {
    return (
      <footer>
        <div className="tabs">
          <div className="tab">
            <span className="icon-map-pointer" />
          </div>
          <div className="tab">
            <span className="icon-list" />
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
