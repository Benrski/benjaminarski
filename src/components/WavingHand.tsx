import { animated, useSpring } from '@react-spring/web';
import React, { FunctionComponent } from 'react';

export const WavingHand: FunctionComponent = () => {
  const handSpring = useSpring({
    config: { duration: 2000 },
    loop: true,
    from: { rotate: 0 },
    rotate: 1,
    transformOrigin: '75% 75%',
  });

  return (
    <animated.span
      className="inline-block"
      style={{
        ...handSpring,
        rotate: handSpring.rotate.to({
          range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
          output: ['0deg', '16deg', '-8deg', '16deg', '-4deg', '8deg', '0deg', '0deg'],
        }),
      }}
    >
      👋
    </animated.span>
  );
};
