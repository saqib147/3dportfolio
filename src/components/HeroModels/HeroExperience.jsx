  import { Float, OrbitControls } from '@react-three/drei'
  import { Canvas } from '@react-three/fiber'
  import React from 'react'
  import { useMediaQuery } from 'react-responsive';
  import { Room } from './Room.jsx';
  import HeroLights from './HeroLights.jsx';

  const HeroExperience = () => {
  
    const isMobile= useMediaQuery({ query: '(max-width: 768px)' });
    return (
      <Canvas camera={{position: [0, 0, 15], fov: 45}}>
      
        <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        maxDistance={15}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        />
        <HeroLights />
        <Float speed={3} rotationIntensity={0.3} floatIntensity={0.7}>

        <group scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]} rotation={[0, -Math.PI /4, 0]}>

        <Room />
        </group>
        </Float>
      </Canvas>
    )
  }

  export default HeroExperience