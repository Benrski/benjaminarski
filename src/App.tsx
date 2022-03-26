import React, { FunctionComponent } from 'react';
import { animated, useChain, useSpring, useSpringRef } from 'react-spring';

export const App: FunctionComponent = () => {
  const greetingSpringRef = useSpringRef();
  const greetingSpring = useSpring({
    ref: greetingSpringRef,
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
  });

  const nameSpringRef = useSpringRef();
  const nameSpring = useSpring({
    ref: nameSpringRef,
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1 },
  });

  useChain([greetingSpringRef, nameSpringRef], [0.2, 0.4]);

  return (
    <section className="flex h-screen items-center justify-center dark:bg-neutral-900 dark:text-white">
      <div>
        <animated.p style={greetingSpring} className="text-3xl">
          Hi there 👋
        </animated.p>
        <animated.p style={nameSpring} className="text-6xl">
          I&apos;m Benjamin Minarski
        </animated.p>
      </div>
    </section>
  );
};
