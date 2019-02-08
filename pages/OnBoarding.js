import React, { Component } from 'react';

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.querySelector('header').classList.add('hidden');
    document.querySelector('nav').classList.add('hidden');
  }

  render() {
    return (
      <div className="onboarding">
        <div className="container">
          <div className="onboarding-texts">
            <h1>Bienvenido</h1>
            <p>En esta aplicación podrás revivir las batallas que ocurrieron durante las guerras carlistas en España y descubrir datos importantes como su localización o participantes.</p>
          </div>
          <div className="onboarding-buttons">
            <a className="btn outline">Empezar</a>
            <a className="btn outline">Saber más</a>
          </div>
        </div>
      </div>
    );
  }
}

export default OnBoarding;
