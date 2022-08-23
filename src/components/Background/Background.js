import { useRef, useMemo, useEffect } from 'react';
import { BackgroundStyle } from './Background.style';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import { vs, fs } from '../../assets/shaders/DayNightShaders';
import useCurrentWidth from '../../hooks/useCurrentWidth';

const InitialCameraDistance = 200;

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

function Earth({ FinalDistance }) {
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

    // Earth Rotation
    earthRef.current.rotation.y += 0.2 * deltaTime;
    cloudsRef.current.rotation.y += 0.2 * deltaTime;

    // Zoom animation
    const r =
      FinalDistance +
      InitialCameraDistance * (1 - (2 * sigmoid(elapsedTime) - 1));
    if (r > FinalDistance) {
      camera.position.z = r;
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

function Scene() {
  let viewportWidth = useCurrentWidth();
  let scrollY = window.scrollY;
  useEffect(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame(({ camera }) => {
    camera.position.y = 3 * (-scrollY / window.innerHeight);
  });

  return (
    <>
      <ambientLight intensity={0.03} />
      <Sun />
      <Stars radius={300} depth={60} count={5000} factor={4} saturation={0} />
      <Earth FinalDistance={10.5084746 - 0.002542373 * viewportWidth} />
    </>
  );
}

export default function Background() {
  return (
    <BackgroundStyle>
      <Canvas
        onCreated={({ camera }) => {
          camera.fov = 45;
          camera.far = 1200;
          camera.position.set(0, 0, InitialCameraDistance);
          camera.lookAt(0, 0, -500);
          camera.updateProjectionMatrix();
        }}
      >
        <Scene />
      </Canvas>
    </BackgroundStyle>
  );
}