import { animated, useChain, useSpring, useSpringRef } from '@react-spring/web';
import { WavingHand } from './components/WavingHand';

export function App() {
  const greetingSpringRef = useSpringRef();
  const greetingSpring = useSpring({
    ref: greetingSpringRef,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const nameSpringRef = useSpringRef();
  const nameSpring = useSpring({
    ref: nameSpringRef,
    from: { opacity: 0, x: '-50%' },
    to: { opacity: 1, x: '0%' },
  });

  const whatSpringRef = useSpringRef();
  const whatSpring = useSpring({
    ref: whatSpringRef,
    from: { opacity: 0, y: '-140%' },
    to: { opacity: 1, y: '0%' },
  });

  const containerSpringRef = useSpringRef();
  const containerSpring = useSpring({
    ref: containerSpringRef,
    from: { y: '15%' },
    to: { y: '0%' },
  });

  useChain([greetingSpringRef, nameSpringRef, whatSpringRef, containerSpringRef], [1, 2, 3, 3]);

  return (
    <section className="flex h-screen items-center justify-center p-8 dark:bg-neutral-900 dark:text-white">
      <animated.div style={containerSpring} className="space-y-2 md:space-y-3 lg:space-y-4">
        <animated.p style={greetingSpring} className="text-2xl md:text-3xl lg:text-4xl">
          Hi there <WavingHand />
        </animated.p>

        <animated.p style={nameSpring} className="text-4xl md:text-5xl lg:text-6xl">
          I&apos;m Benjamin Minarski
        </animated.p>

        <animated.p style={whatSpring} className="text-3xl md:text-4xl lg:text-5xl">
          and I&apos;m a person 🤖
        </animated.p>
      </animated.div>
    </section>
  );
}
