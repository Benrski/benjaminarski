import { animated, useSpring } from '@react-spring/web';
import type { WavingHandProps } from './types';

export function WavingHand({ delay, pause }: WavingHandProps) {
  const spring = useSpring({
    config: { duration: 2000 },
    loop: true,
    from: { rotate: 0 },
    rotate: 1,
    transformOrigin: '75% 75%',
    delay,
    pause,
  });

  return (
    <animated.span
      className="inline-block"
      style={{
        ...spring,
        rotate: spring.rotate.to({
          range: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
          output: ['0deg', '16deg', '-8deg', '16deg', '-4deg', '8deg', '0deg', '0deg'],
        }),
      }}
    >
      👋
    </animated.span>
  );
}
