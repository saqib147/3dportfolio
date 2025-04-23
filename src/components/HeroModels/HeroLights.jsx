import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 6, 5]}
        intensity={100}
        angle={0.15}
        penumbra={0.2}
        color="white"
      />
       <spotLight
        position={[4, 4, 5]}
        intensity={40}
        angle={0.3}
        penumbra={0.5}
        color="#4cc0f0"
      />
       <spotLight
        position={[-3, 6, 5]}
        intensity={70}
        angle={0.4}
        penumbra={0.7}
        color="#9d4edd"
      />

      <primitive
        object={new THREE.RectAreaLight('#A259FF', 6, 3, 5)}
        position={[4, 1, -1]}
        intensity={50}
        rotation={[-Math.PI / 4, Math.PI / 3.5, 0]}
      />

      <pointLight
        position={[1, 1, 0]}
        intensity={20}
        color="#0D0084"
      />
      <pointLight
        position={[1, 2, -1]}
        intensity={50}
        color="#0D0084"
      />
    </>
  );
};

export default HeroLights;
