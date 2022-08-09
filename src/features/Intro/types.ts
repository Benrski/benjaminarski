import { ComponentType } from 'react';

export interface StepProps {
  delay?: number;
  onRest?: () => void;
}

export interface StepConfig {
  Component: ComponentType<StepProps>;
  props?: Partial<StepProps>;
}
