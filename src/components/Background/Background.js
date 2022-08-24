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
const parallaxIntensity = 0.1;

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
        const parallaxX = -parallaxIntensity * cursor.x;
        const parallaxY = parallaxIntensity * cursor.y;
        earthRef.current.position.x = parallaxX;
        earthRef.current.position.y = parallaxY;
        cloudsRef.current.position.x = parallaxX;
        cloudsRef.current.position.y = parallaxY;
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

function Galaxy({
  position,
  count,
  randomness,
  spin,
  galaxyRadius,
  branches,
  randomnessPower,
  insideColor,
  outsideColor,
}) {
  const centerX = position[0];
  const centerY = position[1];
  const centerZ = position[2];

  let [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * galaxyRadius;
      const spinAngle = radius * spin;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;
      const randomX =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        radius;
      const randomY =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        radius;
      const randomZ =
        Math.pow(Math.random(), randomnessPower) *
        (Math.random() < 0.5 ? 1 : -1) *
        randomness *
        radius;

      positions[i3] =
        centerX + Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = centerY + randomY;
      positions[i3 + 2] =
        centerZ + Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const colorInside = new THREE.Color(insideColor);
      const colorOutside = new THREE.Color(outsideColor);
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / galaxyRadius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    return [new Float32Array(positions), new Float32Array(colors)];
  }, [count]);
  return (
    <>
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
            usage={THREE.StaticDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
            usage={THREE.StaticDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          vertexColors={true}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
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
      <Galaxy
        position={[0, -5, 0]}
        count={20000}
        randomness={0.2}
        spin={1}
        galaxyRadius={5}
        branches={3}
        randomnessPower={3}
        insideColor={'#ff6030'}
        outsideColor={'#1b3984'}
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
