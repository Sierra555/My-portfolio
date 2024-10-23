import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";
import { motion } from 'framer-motion-3d';

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/> 
      </Suspense>

      <Preload all />
    </Canvas>    
  );
};

export default ComputersCanvas;


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} />
      <motion.primitive
        object={computer.scene}
        scale={.8}
        position={[0, -1.5, 1.5]}
        animate={{
          rotateY: [0, Math.PI * 2],
        }}
        transition={{
          duration: 3, 
          ease: "easeInOut"
        }}
      />
    </mesh>
  );
};

