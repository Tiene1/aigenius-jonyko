import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { Mesh } from 'three';

interface RobotModelProps {
  modelPath?: string;
}

// Composant pour charger le modèle GLB avec Suspense
const GLTFModel = () => {
  const groupRef = useRef<any>(null);
  const { scene } = useGLTF('/models/jonyko-robot.glb');
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={[50, 50, 50]} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
};

// Composant placeholder amélioré pour ressembler à JONYKO
const PlaceholderModel = () => {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Châssis principal */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[2.5, 0.3, 4]} />
        <meshStandardMaterial color="#2d5016" />
      </mesh>
      
      {/* Roues avant */}
      <mesh position={[-1.4, -0.6, 1.8]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[1.4, -0.6, 1.8]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      
      {/* Roues arrière */}
      <mesh position={[-1.4, -0.6, -1.8]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[1.4, -0.6, -1.8]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.3]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      
      {/* Benne de transport */}
      <mesh position={[0, 0.5, -0.8]}>
        <boxGeometry args={[2, 1, 2.4]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      
      {/* Cabine de contrôle */}
      <mesh position={[0, 0.3, 1.5]}>
        <boxGeometry args={[1.2, 0.8, 1]} />
        <meshStandardMaterial color="#4ade80" />
      </mesh>
      
      {/* Capteurs/Caméras */}
      <mesh position={[-0.4, 0.6, 2]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.4, 0.6, 2]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Antenne GPS */}
      <mesh position={[0, 1, 1.5]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>
      
      {/* Éclairage LED */}
      <mesh position={[0, 0.4, 2.2]}>
        <boxGeometry args={[0.8, 0.2, 0.1]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

// Error Boundary pour GLTF
const GLTFErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    console.warn('Erreur GLTF:', error);
    return <PlaceholderModel />;
  }
};

const RobotModel = ({ modelPath }: RobotModelProps) => {
  // Essayons le modèle GLB maintenant
  return (
    <GLTFErrorBoundary>
      <Suspense fallback={<PlaceholderModel />}>
        <GLTFModel />
      </Suspense>
    </GLTFErrorBoundary>
  );
};

const Robot3D = ({ modelPath }: RobotModelProps) => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        <RobotModel modelPath={modelPath} />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={15}
          autoRotate={true}
          autoRotateSpeed={1}
        />
        
        <Environment preset="sunset" />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-transparent px-2 py-1 rounded text-center">
        Double cliquez ou appuyez et glissez pour contrôler la vue
      </div>
    </div>
  );
};

export default Robot3D;