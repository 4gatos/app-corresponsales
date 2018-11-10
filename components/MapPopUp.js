import React from 'react';
import PropTypes from 'prop-types';

const MapPopUp = ({ title, description, closePopUp }) => (
  <div className="map-popup">
    <div className="overlay" onClick={closePopUp} />
    <div className="popup">
      <div className="popup-img">
        <img src="/static/img/corresponsal.jpg" alt={title} />
      </div>
      <p className="popup-title">{title}</p>
      <p className="popup-description">{description}</p>
    </div>
  </div>
);

MapPopUp.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closePopUp: PropTypes.func.isRequired,
};

export default MapPopUp;
