import { useRef, useMemo, useEffect } from 'react';
import { BackgroundStyle } from './Background.style';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import { vs, fs } from '../../assets/shaders/DayNightShaders';
import useCurrentWidth from '../../hooks/useCurrentWidth';
import {
  sigmoid,
  getCameraDistance,
} from '../../helpers/BackgroundHelperFunctions';

const InitialCameraDistance = 200;

function Earth({ position, FinalDistance }) {
  let viewportWidth = useCurrentWidth();
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
  const cursor = { x: 0, y: 0 };
  useEffect(() => {
    if (viewportWidth > 1000) {
      const handleMouseMove = (event) => {
        cursor.x = event.clientX / window.innerWidth;
        cursor.y = event.clientY / window.innerHeight;
        const parallaxX = -cursor.x;
        const parallaxY = cursor.y;
        earthRef.current.position.x = 0.3 * parallaxX;
        earthRef.current.position.y = 0.3 * parallaxY;
        cloudsRef.current.position.x = 0.3 * parallaxX;
        cloudsRef.current.position.y = 0.3 * parallaxY;
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

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
      <mesh ref={cloudsRef} position={position}>
        <sphereGeometry args={[1.005, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          dise={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={position}>
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
  let scrollY = window.scrollY;
  const { camera } = useThree();
  let viewportWidth = useCurrentWidth();

  useEffect(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      camera.position.y = 4 * (-scrollY / window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nStars = viewportWidth < 1000 ? 2000 : 5000;
  return (
    <>
      <ambientLight intensity={0.03} />
      <Sun />
      <Stars radius={200} depth={60} count={nStars} factor={4} saturation={0} />
      <Earth
        position={[0, 0, 0]}
        FinalDistance={getCameraDistance(viewportWidth)}
      />
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
