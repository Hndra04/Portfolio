import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./retro_pc/scene.gltf");
  return (
    <mesh>
      {/* Increase hemisphere light intensity */}
      <hemisphereLight intensity={1.5} groundColor="black" />

      {/* Additional light for better illumination */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5} // Add directional light
        castShadow
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 6 : 7}
        position={isMobile ? [0, -2, 0.25] : [0, -2, 0.25]}
        rotation={[0, 1.25, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameLoop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 8], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
