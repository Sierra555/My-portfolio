import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from "../Loader";


const RobotCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      linear
      shadows
      camera={{ position: [20, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

const Model = () => {
  const group = useRef();

  const { scene, animations } = useGLTF('./robot/robot.glb');
  const { actions } = useAnimations(animations, scene); 

  React.useEffect(() => {
    actions["Experiment"].play()
  }, [actions]);

  return (
    <group ref={group}>
      <directionalLight position={[-5, -5, 5]} intensity={5} />
      <hemisphereLight intensity={2} />
      <primitive object={scene} scale={2} position={[0, -2, 0]}/>
    </group>
  );
}

export default RobotCanvas;
