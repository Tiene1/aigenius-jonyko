import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei';
import { Suspense } from 'react';
import { Group } from 'three';

interface RobotModelProps {
  modelPath?: string;
}

// Composant pour charger et afficher le modèle GLB
function Model() {
  const gltf = useGLTF('/models/jonyko-robot.glb');
  
  return (
    <primitive 
      object={gltf.scene} 
      scale={[8, 8, 8]}
    />
  );
}

// Précharger le modèle pour de meilleures performances
useGLTF.preload('/models/jonyko-robot.glb');


// Composant de chargement simple
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4ade80" />
    </mesh>
  );
}

const Robot3D = ({ modelPath }: RobotModelProps) => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
      <Canvas
        camera={{ 
          position: [0, 0, 15], 
          fov: 60,
        }}
        gl={{ antialias: true }}
      >
        {/* Éclairage */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        {/* Modèle 3D avec centrage automatique */}
        <Suspense fallback={<Loader />}>
          <Center>
            <Model />
          </Center>
        </Suspense>
        
        {/* Contrôles */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={8}
          maxDistance={25}
          autoRotate={false}
          dampingFactor={0.05}
          enableDamping={true}
        />
        
        {/* Environnement */}
        <Environment preset="city" />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-transparent px-2 py-1 rounded text-center">
        Double cliquez ou appuyez et glissez pour contrôler la vue
      </div>
    </div>
  );
};

export default Robot3D;