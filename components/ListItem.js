import React from 'react';
import PropTypes from 'prop-types';
import Icon from './basics/Icon';

const ListItem = ({ icon, text }) => (
  <li className="item">
    <Icon icon={icon} />
    <span>{text}</span>
  </li>
);

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListItem;
