import React from 'react';
import PropTypes from 'prop-types';

const goBack = () => window.history.back();

const Header = ({ backButton }) => (
  <header>
    <div>
      { backButton
        ? <span role="button" className="icon-back" onClick={goBack} />
        : (
          <img src="/static/img/logo.png" alt="CEU" key="logo" />
          // <span className="icon-filter" key="filter" />,
        )
      }
    </div>
  </header>
);

Header.propTypes = {
  backButton: PropTypes.bool.isRequired,
};

export default Header;
