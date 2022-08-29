import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const Adam = ({ ...props }) => {
  const [position, setPosition] = useState([0, 0, 0]);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [spring, set] = useSpring(() => ({ position, config: { mass: 1, friction: 40, tension: 800 } }));

  const bind = useDrag(({ offset: [x, y], down }) => {
    setPosition([x / aspect, -y / aspect, 0]);
    set({ config: { mass: down ? 1 : 4, tension: down ? 2000 : 800 }, position });
  });

  const { nodes, materials } = useGLTF('/assets/models/Adam.gltf');
  return (
    <group {...props} dispose={null}>
      <animated.group {...bind()} {...spring}>
        <mesh castShadow receiveShadow geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} />
        <mesh castShadow receiveShadow geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
        />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} />
        <mesh castShadow receiveShadow geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} />
      </animated.group>
    </group>
  );
};

export default Adam;
