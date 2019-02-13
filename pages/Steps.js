import React, { Component } from 'react';
import Step from '../components/Step';
import { Link } from '../routes/routes';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
    this.setStep = this.setStep.bind(this);
  }

  componentDidMount() {
    document.querySelector('header').classList.add('hidden');
    document.querySelector('nav').classList.add('hidden');
  }

  componentWillUnmount() {
    document.querySelector('header').classList.remove('hidden');
    document.querySelector('nav').classList.remove('hidden');
    localStorage.setItem('onboarding', 'done');
  }

  setStep(event) {
    const { value } = event.target;

    this.setState({ currentStep: Number(value) + 1 });
  }

  render() {
    const { currentStep } = this.state;
    return (
      <div className="onboarding">
        <div className="container">
          <div className="steps">
            <Step
              setStep={this.setStep}
              step={1}
              currentStep={currentStep}
              icon="icon-feather"
              title="1. Corresponsales"
              body="Descubre al detalle todo lo acontecido: imágenes de los hitos históricos, personajes involucrados e historias ocultas"
            />
            <Step
              setStep={this.setStep}
              step={2}
              currentStep={currentStep}
              icon="icon-map"
              title="2. Rutas"
              body="Selecciona el hito histórico que te interese y descubre estadísticas, localizaciones, etc."
            />
            <Step
              setStep={this.setStep}
              step={3}
              currentStep={currentStep}
              icon="icon-swords"
              title="3. Hitos"
              body="Selecciona hitos históricos que ocurrieron en España durante las Guerras Carlistas."
            />
          </div>
          <div className="onboarding-route">
            <Link route="map">
              <a className="btn outline">Comenzar</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Steps.propTypes = {};

export default Steps;
