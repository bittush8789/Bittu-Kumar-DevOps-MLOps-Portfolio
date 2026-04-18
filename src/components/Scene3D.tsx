import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Points, PointMaterial, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 1000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = t * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#888888"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingShape({ position, color, size, speed, distort, type = 'sphere' }: { position: [number, number, number], color: string, size: number, speed: number, distort: number, type?: 'sphere' | 'torus' | 'icosahedron' }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(t * speed) * 0.002;
  });

  const Geometry = type === 'torus' ? Torus : type === 'icosahedron' ? Icosahedron : Sphere;
  const args = type === 'torus' ? [size, 0.4, 32, 100] : type === 'icosahedron' ? [size, 0] : [size, 64, 64];

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Geometry ref={mesh} position={position} args={args as any}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.25}
        />
      </Geometry>
    </Float>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function Scene3D() {
  const [themeColors, setThemeColors] = React.useState({ primary: '#FFB319', accent: '#6366F1' });

  React.useEffect(() => {
    const updateColors = () => {
      const style = getComputedStyle(document.documentElement);
      setThemeColors({
        primary: style.getPropertyValue('--primary-color').trim() || '#FFB319',
        accent: style.getPropertyValue('--accent-color').trim() || '#6366F1'
      });
    };

    updateColors();
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none opacity-30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color={themeColors.primary} />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color={themeColors.accent} />
        
        <FloatingShape position={[-4, 2, -2]} color={themeColors.primary} size={1.2} speed={2} distort={0.4} type="torus" />
        <FloatingShape position={[4, -2, -4]} color={themeColors.accent} size={1.8} speed={1.5} distort={0.5} type="icosahedron" />
        <FloatingShape position={[0, -4, -6]} color="#000000" size={1} speed={3} distort={0.3} />
        <FloatingShape position={[-6, -3, -8]} color={themeColors.primary} size={0.8} speed={1.2} distort={0.6} type="icosahedron" />
        <FloatingShape position={[6, 4, -5]} color={themeColors.accent} size={1.5} speed={2.5} distort={0.2} type="torus" />
        
        <FloatingParticles />
        <Rig />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-transparent to-[var(--bg-color)]" />
    </div>
  );
}


