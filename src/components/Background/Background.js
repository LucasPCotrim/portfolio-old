import { useRef, useMemo, useEffect } from 'react';
import { BackgroundStyle } from './Background.style';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import AsteroidMap from '../../assets/textures/asteroid_texture.jpg';
import { vs, fs } from '../../assets/shaders/DayNightShaders';
import useCurrentWidth from '../../hooks/useCurrentWidth';
import { getCameraDistance } from '../../helpers/BackgroundHelperFunctions';

const parallaxIntensity = 0.1;

function Earth({ position }) {
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
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - timeBefore;

    // Earth Rotation
    earthRef.current.rotation.y += 0.2 * deltaTime;
    cloudsRef.current.rotation.y += 0.2 * deltaTime;

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
  rotation,
  rotationSpeed,
  count,
  randomness,
  spin,
  galaxyRadius,
  branches,
  randomnessPower,
  insideColor,
  outsideColor,
}) {
  const galaxyRef = useRef();

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

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

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

  let timeBefore = 0;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - timeBefore;

    // Galaxy Rotation
    galaxyRef.current.rotation.y += rotationSpeed * deltaTime;
    timeBefore = elapsedTime;
  });

  return (
    <>
      <group position={position} rotation={rotation}>
        <points ref={galaxyRef}>
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
            size={0.006}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    </>
  );
}

function AsteroidBelt({ position, rotation, radius, count }) {
  const asteroidColorMap = useLoader(TextureLoader, AsteroidMap);
  const minAstRadius = 0.1;
  const maxAstRadius = 10;
  const dispersionY = 15;
  const MaxRotationSpeed = 0.5;

  const asteroidBeltRef = useRef();
  const asteroidsRef = useRef();

  const asteroidsData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const r = minAstRadius + Math.random() * (maxAstRadius - minAstRadius);
      const theta = Math.random() * 2 * Math.PI;
      const posR = radius + (Math.random() - 0.5);
      const x = posR * Math.cos(theta);
      const y = dispersionY * Math.random();
      const z = posR * Math.sin(theta);
      const rotSpeedX = MaxRotationSpeed * 2 * (Math.random() - 0.5);
      const rotSpeedY = MaxRotationSpeed * 2 * (Math.random() - 0.5);
      data.push({
        radius: r,
        position: [x, y, z],
        rotationSpeed: { x: rotSpeedX, y: rotSpeedY },
      });
    }
    return data;
  }, [count]);

  let timeBefore = 0;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - timeBefore;

    // Asteroid Belt Rotation
    asteroidsRef.current.rotation.y += 0.1 * deltaTime;

    // Individual Asteroid Rotation
    asteroidsRef.current.children.forEach((mesh, i) => {
      mesh.rotation.y += asteroidsData[i].rotationSpeed.y * deltaTime;
      mesh.rotation.x += asteroidsData[i].rotationSpeed.x * deltaTime;
    });
    timeBefore = elapsedTime;
  });

  return (
    <>
      <group ref={asteroidBeltRef} position={position} rotation={rotation}>
        <mesh ref={asteroidsRef}>
          {asteroidsData.map((asteroid, index) => {
            return (
              <Sphere
                key={index}
                visible
                position={asteroid.position}
                args={[asteroid.radius, 8, 8]}
              >
                <MeshDistortMaterial
                  attach="material"
                  distort={0.5}
                  speed={0}
                  roughness={1}
                  map={asteroidColorMap}
                  color={'#cfcfcf'}
                />
              </Sphere>
            );
          })}
        </mesh>
      </group>
    </>
  );
}

function Scene() {
  let scrollY = window.scrollY;
  const { camera } = useThree();
  let viewportWidth = useCurrentWidth();
  const FinalDistance = getCameraDistance(viewportWidth);

  useEffect(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
      camera.position.y = 4 * (-scrollY / window.innerHeight);
      camera.position.z = FinalDistance + 40 * (scrollY / window.innerHeight);
      camera.rotation.y = 0.4 * (-scrollY / window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nStars = viewportWidth < 1000 ? 2000 : 5000;
  const nStarsGalaxy = viewportWidth < 1000 ? 8000 : 15000;
  return (
    <>
      <ambientLight intensity={0.03} />
      <Sun />
      <Stars radius={200} depth={60} count={nStars} factor={4} saturation={0} />
      <Earth position={[0, 0, 0]} />
      <Galaxy
        position={[7, -4, 35]}
        rotation={[0.2, 0, Math.PI * 0.25]}
        rotationSpeed={0.2}
        count={nStarsGalaxy}
        randomness={0.2}
        spin={1}
        galaxyRadius={5}
        branches={3}
        randomnessPower={3}
        insideColor={'#ff6030'}
        outsideColor={'#1b3984'}
      />
      <AsteroidBelt
        position={[120, -15, 100]}
        rotation={[0.2, 0, -Math.PI * 0.25]}
        radius={110}
        count={15}
      />
    </>
  );
}

export default function Background() {
  let viewportWidth = useCurrentWidth();
  const FinalDistance = getCameraDistance(viewportWidth);
  return (
    <BackgroundStyle>
      <Canvas
        onCreated={({ camera }) => {
          camera.fov = 45;
          camera.far = 1200;
          camera.position.set(0, 0, FinalDistance);
          camera.lookAt(0, 0, -500);
          camera.updateProjectionMatrix();
        }}
      >
        <Scene />
      </Canvas>
    </BackgroundStyle>
  );
}
