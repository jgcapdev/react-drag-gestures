import React from 'react';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const Box = () => {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [spring, set] = useSpring(() => ({ position: [0, 0, 0], config: { mass: 1, friction: 40, tension: 800 } }));

  const bind = useDrag(({ movement: [x, y], down }) =>
    set({ config: { mass: down ? 1 : 4, tension: down ? 2000 : 800 }, position: down ? [x / aspect, -y / aspect, 0] : [0, 0, 0] })
  );
  return (
    <animated.mesh {...spring} {...bind()} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshNormalMaterial />
    </animated.mesh>
  );
};

export default Box;
