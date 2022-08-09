import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import type { StepProps } from '../../types';
import { WavingHand } from '../WavingHand';

export function IntroStep({ delay = 0, onRest }: StepProps) {
  const [wavingHand, setWavingHand] = useState(false);

  const greetingSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
  });

  const nameSpring = useSpring({
    from: { opacity: 0, x: '-50%' },
    to: { opacity: 1, x: '0%' },
    delay: 1500 + delay,
  });

  const whatSpring = useSpring({
    from: { opacity: 0, y: '-140%' },
    to: { opacity: 1, y: '0%' },
    delay: 3000 + delay,
  });

  const containerSpring = useSpring({
    from: { y: '15%' },
    to: { y: '0%' },
    delay: 3000 + delay,
    onRest: () => {
      setWavingHand(true);
      onRest?.();
    },
  });

  return (
    <animated.div style={containerSpring} className="space-y-2 md:space-y-3 lg:space-y-4">
      <animated.p style={greetingSpring} className="text-2xl md:text-3xl lg:text-4xl">
        Hi there <WavingHand pause={!wavingHand} />
      </animated.p>

      <animated.p style={nameSpring} className="text-4xl md:text-5xl lg:text-6xl">
        I&apos;m Benjamin Minarski
      </animated.p>

      <animated.p style={whatSpring} className="text-3xl md:text-4xl lg:text-5xl">
        and I&apos;m a person 🤖
      </animated.p>
    </animated.div>
  );
}
