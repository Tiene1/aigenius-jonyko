import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

interface RobotModelProps {
  modelPath?: string;
}

const RobotModel = ({ modelPath }: RobotModelProps) => {
  const groupRef = useRef<any>(null);
  
  // Essayer de charger le modèle GLTF s'il est fourni
  let gltfData = null;
  try {
    if (modelPath) {
      gltfData = useGLTF(modelPath);
    }
  } catch (error) {
    console.warn('Erreur de chargement du modèle GLTF:', error);
  }
  
  // Animation de rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  // Si le modèle GLTF est chargé, l'afficher
  if (gltfData && gltfData.scene) {
    return (
      <group ref={groupRef} scale={[2, 2, 2]} position={[0, -1, 0]}>
        <primitive object={gltfData.scene} />
      </group>
    );
  }

  // Sinon, afficher le placeholder
  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        {/* Corps principal du robot */}
        <boxGeometry args={[2, 1, 3]} />
        <meshStandardMaterial color="#4ade80" />
      </mesh>
      
      {/* Roues */}
      <mesh position={[-1.2, -0.8, 1.2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      <mesh position={[1.2, -0.8, 1.2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      <mesh position={[-1.2, -0.8, -1.2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      <mesh position={[1.2, -0.8, -1.2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      
      {/* Benne de transport */}
      <mesh position={[0, 0.8, -0.5]}>
        <boxGeometry args={[1.8, 0.8, 2]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      
      {/* Capteurs */}
      <mesh position={[0, 0.3, 1.6]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.3} />
      </mesh>
    </group>
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