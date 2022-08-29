const Plane = () => {
  return (
    <mesh receiveShadow position={[0, 0, -1]}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#303040" />
    </mesh>
  );
};

export default Plane;
