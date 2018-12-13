import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'cloudinary-react';
import { Link } from '../routes/routes';

const ListCard = ({
  img,
  title,
  body,
  route,
  slug,
}) => (
  <div className="list-card-item">
    <div className="list-card-header">
      <Link route={route} params={{ id: slug }}>
        <Image publicId={img} />
      </Link>
    </div>
    <div className="list-card-body">
      <h4>{title}</h4>
      <p>{body}</p>
      <Link route={route} params={{ id: slug }}>
        <a className="block-link">Ver más</a>
      </Link>
    </div>
  </div>
);

ListCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ListCard;
