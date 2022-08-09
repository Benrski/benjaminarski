import { animated, useChain, useSpring, useSpringRef, useSprings } from '@react-spring/web';
import type { StepProps } from '../../types';
import { PATHS_PROPS } from './constants';

export function LogoStep({ delay = 0, onRest }: StepProps) {
  const pathsSpringsRef = useSpringRef();
  const [pathsSprings] = useSprings(PATHS_PROPS.length, (i) => ({
    ref: pathsSpringsRef,
    config: { tension: 1000, friction: 100 },
    delay: i * 100 + delay,
    ...PATHS_PROPS[i],
  }));

  const svgSpringRef = useSpringRef();
  const svgSpring = useSpring({
    ref: svgSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 1000,
    onRest,
  });

  useChain([pathsSpringsRef, svgSpringRef]);

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="50vmin"
      height="50vmin"
      className="overflow-visible fill-current"
      style={svgSpring}
    >
      {pathsSprings.map(({ d, ...style }, i) => (
        <animated.path key={i} d={d} style={style} />
      ))}
    </animated.svg>
  );
}
