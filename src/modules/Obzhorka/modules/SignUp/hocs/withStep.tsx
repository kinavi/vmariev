import { useState } from 'react';
import { WithStepType } from './types';
import { StepType } from '..';

export const withStep: WithStepType = (Components) => (props) => {
  const [step, setStep] = useState<number>(0);
  const Component = Components[props.steps[step]];

  if (!Component) {
    return null;
  }

  return (
    <Component
      onBack={
        step > 0
          ? () => {
              setStep((v) => v - 1);
            }
          : undefined
      }
      onForward={() => {
        if (step < props.steps.length - 1) {
          setStep((v) => v + 1);
        } else {
          props.onSubmit();
        }
      }}
    />
  );
};
