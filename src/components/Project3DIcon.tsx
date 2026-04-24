import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron, Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Project3DIconProps {
  type: 'DevOps' | 'MLOps' | 'LLMOps' | 'All';
  color?: string;
}

function DevOpsIcon({ color }: { color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <Torus ref={mesh} args={[1, 0.3, 16, 100]}>
      <MeshDistortMaterial
        color={color}
        speed={0}
        distort={0.3}
        radius={1}
        metalness={0.8}
        roughness={0.2}
      />
    </Torus>
  );
}

function MLOpsIcon({ color }: { color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <Sphere ref={mesh} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        speed={0}
        distort={0.5}
        radius={1}
        metalness={0.6}
        roughness={0.1}
      />
    </Sphere>
  );
}

function LLMOpsIcon({ color }: { color: string }) {
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <Icosahedron ref={mesh} args={[1, 0]}>
      <MeshDistortMaterial
        color={color}
        speed={0}
        distort={0.4}
        radius={1}
        metalness={0.9}
        roughness={0.1}
      />
    </Icosahedron>
  );
}

export function Project3DIcon({ type }: Project3DIconProps) {
  const [colors, setColors] = React.useState({ primary: '#FFB319', accent: '#6366F1' });

  React.useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    setColors({
      primary: style.getPropertyValue('--primary').trim() || '#FFB319',
      accent: style.getPropertyValue('--accent').trim() || '#6366F1'
    });
  }, []);

  return (
    <div className="w-full h-full min-h-[150px] relative cursor-pointer">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        
        {type === 'DevOps' && <DevOpsIcon color={colors.primary} />}
        {type === 'MLOps' && <MLOpsIcon color={colors.accent} />}
        {type === 'LLMOps' && <LLMOpsIcon color="#EC4899" />}
        {type === 'All' && <DevOpsIcon color={colors.primary} />}
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
