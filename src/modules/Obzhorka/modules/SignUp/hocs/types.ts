import { StepType } from '..';

export type WithStepType = (Component: {
  [key in StepType]: (props: {
    onBack?: () => void;
    onForward: () => void;
  }) => JSX.Element;
}) => (props: { onSubmit: () => void; steps: StepType[] }) => JSX.Element | null;
