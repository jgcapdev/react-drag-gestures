import { Canvas } from '@react-three/fiber';
import { Loader, Sky, Environment } from '@react-three/drei';

import Lights from './components/Lights.js';
import Plane from './components/Plane.js';
import Adam from './components/Adam.js';

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5] }}>
        <Lights />

        <Adam />
        <Plane />

        <Sky sunPosition={[100, 20, 100]} />
        <Environment files="/assets/royal_esplanade_1k.hdr" />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
