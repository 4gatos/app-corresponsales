import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };

    this.cardBody = React.createRef();

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  // componentDidMount() {
  //   const { collapsible } = this.props;

  //   if (collapsible) {
  //     const height = this.cardBody.current.clientHeight;
  //     this.cardBody.current.style.height = `${height}px`;
  //   }
  // }

  toggleCollapsed() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    const { collapsible, title, children } = this.props;
    const { collapsed } = this.state;
    return (
      <div className={`card${collapsible ? ' collapsible' : ''}`}>
        <div className="wrapper">
          <div className="card-title">
            <h3>{title}</h3>
            {collapsible && (
              <button className={`btn-collapsible${collapsed ? '' : ' turned'}`} type="button" onClick={this.toggleCollapsed}>
                <span className="icon-arrowcollapsible" />
              </button>
            )}
          </div>
          <div className={`card-body${collapsed ? ' collapsed' : ''}`} ref={this.cardBody}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  collapsible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
  ]).isRequired,
};

Card.defaultProps = {
  collapsible: false,
};

export default Card;
