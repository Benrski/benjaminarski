import { animated, config, useChain, useSpring, useSpringRef, useSprings } from '@react-spring/web';
import type { StepProps } from '../../types';
import { PATHS_PROPS } from './constants';

export function LogoStep({ delay = 0, onRest }: StepProps) {
  const lastPathSpringRef = useSpringRef();
  const [pathsSprings] = useSprings(PATHS_PROPS.length, (i) => {
    const { from, to } = PATHS_PROPS[i];

    return {
      ref: lastPathSpringRef,
      config: { tension: 1000, friction: 50 },
      from: { opacity: 0, ...from },
      to: { opacity: 1, ...to },
      delay: i * 333 + delay,
    };
  });

  const svgSpringRef = useSpringRef();
  const svgSpring = useSpring({
    ref: svgSpringRef,
    config: config.slow,
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 1500,
    onRest,
  });

  useChain([lastPathSpringRef, svgSpringRef]);

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="overflow-visible fill-current"
      style={svgSpring}
    >
      {pathsSprings.map(({ d, ...style }, i) => (
        <animated.path key={i} d={d} style={style} />
      ))}
    </animated.svg>
  );
}
