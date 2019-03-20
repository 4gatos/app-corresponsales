import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { Link } from '../routes/routes';

const MapPopUp = ({
  title,
  description,
  closePopUp,
  popUpImg,
  route,
  slug,
}) => (
  <CloudinaryContext cloudName="plasocloudinary">
    <div className="map-popup">
      <div className="overlay" onClick={closePopUp} />
      <div className="popup">
        <div className="popup-img">
          <Image publicId={popUpImg} />
        </div>
        <p className="popup-title">{title}</p>
        {route !== 'source' ? (
          <p className="popup-description">{description}</p>
        ) : (
          description
        )}
        {route !== 'source' && (
          <div className="popup-actions">
            <Link route={route} params={{ id: slug }}>
              <a className="btn btn-primary">Ver más</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  </CloudinaryContext>
);

MapPopUp.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closePopUp: PropTypes.func.isRequired,
  popUpImg: PropTypes.string.isRequired,
};

export default MapPopUp;
