import React from 'react';
import CustomLink from './CustomLink';

const Footer = () => (
  <nav>
    <div className="tabs">
      <div className="tab">
        <CustomLink route="map">
          <span className="icon icon-map-pointer" />
        </CustomLink>
      </div>
      <div className="tab">
        <CustomLink route="list">
          <span className="icon icon-list" />
        </CustomLink>
      </div>
    </div>
  </nav>
);

export default Footer;
