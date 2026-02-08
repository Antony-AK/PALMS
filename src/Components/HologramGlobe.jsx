import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";


function GlobeModel() {
  const ref = useRef();
  const isVisible = useRef(true);

  const { scene } = useGLTF("/models/hologram_globe_using_geometry_nodes.glb");


  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#173E6B",
          transparent: true,
          opacity: 0.9,
          emissive: new THREE.Color("#13294B"),
          emissiveIntensity: 1.8,
          roughness: 0.25,
          metalness: 0.75,
        });

        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene]);



useFrame((state, delta) => {
  if (!isVisible.current || !ref.current) return;

  ref.current.rotation.y += delta * 0.12;

  ref.current.traverse((child) => {
    if (child.material?.emissiveIntensity) {
      child.material.emissiveIntensity =
        1.6 + Math.sin(state.clock.elapsedTime * 0.6) * 0.25;
    }
  });
});


  return (
    <primitive
      ref={ref}
      object={scene}
      scale={3.2}
      position={[0.4, -0.9, 0]}
    />


  );
}


const HologramGlobe = () => {
  return (
    <div className="absolute right-0 top-[50%] h-[80%] w-[45%] hidden lg:block pointer-events-none animate-fadeIn">
      <Canvas
        camera={{ position: [0, 0, 3.6], fov: 34 }}
        gl={{ alpha: true, antialias: true }}
      >

        <ambientLight intensity={0.12} />

        {/* Core glow */}
        <pointLight
          position={[0, 0, 2.5]}
          intensity={4.2}
          color="#9fffe0"
        />

        {/* Right rim */}
        <pointLight
          position={[4, 1, 1]}
          intensity={2.6}
          color="#6cc24a"
        />

        {/* Left rim */}
        <pointLight
          position={[-4, -1, 1]}
          intensity={2.2}
          color="#4fd1c5"
        />

        {/* Back silhouette */}
        <directionalLight
          position={[0, 0, -4]}
          intensity={1.4}
        />


        <Suspense fallback={null}>
          <GlobeModel />
        </Suspense>
      </Canvas>

    </div>
  );
};

useGLTF.preload("/models/hologram_globe_using_geometry_nodes.glb");

export default HologramGlobe;
