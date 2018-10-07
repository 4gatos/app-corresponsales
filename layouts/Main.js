import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/basics/Header';
import Footer from '../components/basics/Footer';
import '../styles/main.styl';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <section className="mainContent">
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              ...this.props,
            })
          )}
        </section>
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
  ]).isRequired,
};

export default Main;
