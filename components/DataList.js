import React from 'react';
import PropTypes from 'prop-types';

const DataList = ({ children }) => (
  <ul className="data-list">
    {children}
  </ul>
);

DataList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
  ]).isRequired,
};

export default DataList;
