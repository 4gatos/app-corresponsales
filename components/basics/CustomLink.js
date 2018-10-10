/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { Link } from '../../routes/routes';
import routeList from '../../routes/index.json';

const CustomLink = ({ route, children, params }) => {
  let page = '';
  let isActive = '';
  const linkProps = {
    ...(route ? { route } : null),
    ...(params ? { params } : null),
  };
  if (process.browser) {
    page = Router.route;
    isActive = `/${routeList[route].page}` === page;
  }
  return (
    <Link {...linkProps}>
      <a className={`link${isActive ? ' active' : ''}`}>
        {children}
      </a>
    </Link>
  );
};

CustomLink.propTypes = {
  route: PropTypes.string.isRequired,
  params: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
  ]).isRequired,
};

CustomLink.defaultProps = {
  params: null,
};

export default CustomLink;
