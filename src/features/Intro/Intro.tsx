import { useMemo, useState } from 'react';
import { GreetingStep } from './components/GreetingStep';
import { LogoStep } from './components/LogoStep';
import type { StepConfig } from './types';

export const STEPS: StepConfig[] = [
  { Component: LogoStep, props: { delay: 1000 } },
  { Component: GreetingStep, props: { delay: 500 } },
];

export function Intro() {
  const [stepIndex, setStepIndex] = useState(0);
  const { Component: Step, props: stepProps } = useMemo(() => STEPS[stepIndex], [stepIndex]);

  const handleStepRest = () => {
    const nextStepIndex = stepIndex + 1;
    if (nextStepIndex < STEPS.length) {
      setStepIndex(nextStepIndex);
    }
  };

  return (
    <section className="flex h-screen w-screen items-center justify-center p-8 dark:bg-neutral-900 dark:text-white">
      <Step onRest={handleStepRest} {...stepProps} />
    </section>
  );
}
