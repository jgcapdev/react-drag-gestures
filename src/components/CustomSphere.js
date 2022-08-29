import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const CustomSphere = () => {
  const [position, setPosition] = useState([0, 0, 0]);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [spring, set] = useSpring(() => ({ position, config: { mass: 1, friction: 40, tension: 800 } }));

  const bind = useDrag(({ offset: [x, y], down }) => {
    setPosition([x / aspect, -y / aspect, 0]);
    set({ config: { mass: down ? 1 : 4, tension: down ? 2000 : 800 }, position });
  });

  return (
    <animated.mesh {...spring} {...bind()} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <meshNormalMaterial />
    </animated.mesh>
  );
};

export default CustomSphere;
