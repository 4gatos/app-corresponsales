import React, { Component } from 'react';
import Step from '../components/Step';
import { Link } from '../routes/routes';

const steps = [
  {
    icon: 'feather',
    title: 'Corresponsales',
    body: 'Descubre al detalle todo lo acontecido: imágenes de los hitos históricos, personajes involucrados e historias ocultas',
  },
  {
    icon: 'swords',
    title: 'Hitos',
    body: 'Nos acercamos a los acontecimientos más importantes de la guerra: batallas, expediciones, sitios, resistencia de las ciudades, estado de las tropas o de la población civil.',
  },
  {
    icon: 'lens',
    title: 'Fuentes',
    body: '¿A través de qué fuentes reciben los periódicos sus informaciones sobre la Primera Guerra Carlista?, ¿de qué fuentes reciben los diarios la información?',
  },
  {
    icon: 'newspaper',
    title: 'Periódicos',
    body: 'Aproximación a la historia de los periódicos que cubrieron -o publicaron informaciones- sobre la Primera Guerra Carlista',
  },
];

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
            {steps.map(({ icon, title, body }, index) => (
              <Step
                setStep={this.setStep}
                step={index + 1}
                currentStep={currentStep}
                icon={`icon-${icon}`}
                title={`${index + 1}. ${title}`}
                body={body}
              />
            ))}
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
