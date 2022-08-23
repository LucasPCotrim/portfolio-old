import { useRef, useMemo } from 'react';
import { BackgroundStyle } from './Background.style';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import { vs, fs } from '../../assets/shaders/DayNightShaders';

function Earth() {
  const [colorMapDay, colorMapNight, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNightMap, EarthSpecularMap, EarthCloudsMap]
  );
  const earthRef = useRef();
  const cloudsRef = useRef();
  const shaderRef = useRef();

  const shaderData = useMemo(
    () => ({
      uniforms: {
        sunDirection: { value: new THREE.Vector3(-1, 0, 0) },
        dayTexture: { value: colorMapDay },
        nightTexture: { value: colorMapNight },
      },
      vertexShader: vs,
      fragmentShader: fs,
    }),
    []
  );

  let timeBefore = 0;
  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - timeBefore;

    //Earth Rotation
    earthRef.current.rotation.y += 0.2 * deltaTime;
    cloudsRef.current.rotation.y += 0.2 * deltaTime;

    // Initia Zoom
    const camDistanceTravelled = 50 * elapsedTime;
    if (camDistanceTravelled < 200) {
      camera.position.z = 203 - camDistanceTravelled;
    }
    timeBefore = elapsedTime;
  });

  return (
    <>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.005, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          dise={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <shaderMaterial ref={shaderRef} attach="material" {...shaderData} />
      </mesh>
    </>
  );
}

function Sun() {
  return (
    <directionalLight color="#ffffff" position={[-50, 0, 0]} intensity={1} />
  );
}

export default function Background() {
  return (
    <BackgroundStyle>
      <Canvas camera={{ fov: 45, near: 0.1, far: 1200, position: [0, 0, 50] }}>
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
        <ambientLight intensity={0.03} />
        <Sun />
        <Stars radius={300} depth={60} count={5000} factor={4} saturation={0} />
        <Earth />
      </Canvas>
    </BackgroundStyle>
  );
}
