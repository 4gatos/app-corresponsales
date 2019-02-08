import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/basics/Header';
import Footer from '../components/basics/Footer';
import '../styles/main.styl';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButton: false,
    };
    this.onHideBackButton = this.onHideBackButton.bind(this);
    this.onShowBackButton = this.onShowBackButton.bind(this);
  }

  onHideBackButton() {
    this.setState({ backButton: false });
  }

  onShowBackButton() {
    this.setState({ backButton: true });
  }

  render() {
    const { children } = this.props;
    const { backButton } = this.state;
    return (
      <div className="mainLayout">
        <Header backButton={backButton} />
        <section className="mainContent">
          {React.Children.map(children, child => React.cloneElement(child, {
            ...this.props,
            hideBackButton: this.onHideBackButton,
            showBackButton: this.onShowBackButton,
          }))}
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
