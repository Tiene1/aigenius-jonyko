import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import jonykoModel from '@/assets/models/jonyko-robot.gltf';

interface RobotModelProps {
  modelPath?: string;
}

const RobotModel = ({ modelPath }: RobotModelProps) => {
  const groupRef = useRef<any>(null);
  
  // Charger le modèle GLTF
  const { scene } = useGLTF(modelPath || jonykoModel);
  
  // Animation de rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={[2, 2, 2]} position={[0, -1, 0]}>
      <primitive object={scene} />
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