import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => (
  <span className={`icon ${icon}`} />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
