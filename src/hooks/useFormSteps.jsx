import { useState } from 'react';

const useFormSteps = (totalSteps) => {
  const [currentStep, setCurrentStep] = useState(1)

  const next = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps))
  };

  const prev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  };

  const reset = () => {
    setCurrentStep(1)
  }

  return { currentStep, next, prev, reset };
};

export default useFormSteps;