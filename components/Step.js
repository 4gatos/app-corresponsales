import React from 'react';
import PropTypes from 'prop-types';
import Icon from './basics/Icon';
import { Link } from '../routes/routes';

const Step = ({
  icon, title, body, currentStep, step, setStep,
}) => (
  <div className={`step${currentStep === step ? ' current' : ''}`}>
    <div className="step-icon">
      <Icon icon={icon} />
    </div>
    <div className="onboarding-texts">
      <h1>{title}</h1>
      <p>
        {body}
      </p>
    </div>
    <div className="onboarding-buttons">
      {step === 4 ? (
        <Link route="map">
          <a className="btn outline">Comenzar</a>
        </Link>
      ) : (
        <button type="button" value={step} className="btn outline" onClick={setStep}>
          Siguiente
        </button>
      )}
    </div>
  </div>
);

Step.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};


export default Step;
