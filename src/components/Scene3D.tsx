import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, size, speed, distort }: { position: [number, number, number], color: string, size: number, speed: number, distort: number }) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.position.y += Math.sin(t * speed) * 0.002;
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={mesh} position={position} args={[size, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={1}
          metalness={0.5}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </Sphere>
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
    <div className="fixed inset-0 -z-50 pointer-events-none opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={themeColors.primary} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={themeColors.accent} />
        
        <FloatingShape position={[-4, 2, -2]} color={themeColors.primary} size={1.5} speed={2} distort={0.4} />
        <FloatingShape position={[4, -2, -4]} color={themeColors.accent} size={2} speed={1.5} distort={0.5} />
        <FloatingShape position={[0, -4, -6]} color="#ffffff" size={0.8} speed={3} distort={0.3} />
        
        <Rig />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
    </div>
  );
}
