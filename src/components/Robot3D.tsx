import React, { useState, useEffect } from 'react';
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
      scale={[4, 4, 4]}
      position={[0, 0, 0]}
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détecter si on est sur mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Configuration optimisée pour mobile
  const mobileConfig = {
    antialias: false,
    alpha: false,
    powerPreference: "default" as const,
    stencil: false,
    depth: true
  };

  const desktopConfig = {
    antialias: true,
    alpha: true,
    powerPreference: "high-performance" as const
  };

  // Configuration et rendu adaptatif selon l'appareil
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-background to-muted">
      <Canvas
        camera={{ 
          position: [0, 0, 20], 
          fov: 50,
        }}
        gl={isMobile ? mobileConfig : desktopConfig}
        frameloop={isMobile ? "demand" : "always"}
      >
        {/* Éclairage adaptatif */}
        <ambientLight intensity={isMobile ? 0.8 : 0.5} />
        {!isMobile && (
          <>
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1}
              castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />
          </>
        )}
        {isMobile && (
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.8}
            castShadow={false}
          />
        )}
        
        {/* Modèle 3D avec centrage automatique */}
        <Suspense fallback={<Loader />}>
          <Center>
            <Model />
          </Center>
        </Suspense>
        
        {/* Contrôles adaptatifs */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={10}
          maxDistance={35}
          autoRotate={false}
          dampingFactor={isMobile ? 0.1 : 0.05}
          enableDamping={true}
          target={[0, 0, 0]}
          touches={{
            ONE: 0, // Rotation avec un doigt
            TWO: 1, // Pan avec deux doigts
            THREE: 2 // Zoom avec deux doigts (pinch)
          }}
          mouseButtons={{
            LEFT: 0, // Rotation souris
            MIDDLE: 1, // Zoom molette
            RIGHT: 2 // Pan clic droit
          }}
        />
        
        {/* Environnement adaptatif */}
        <Environment preset={isMobile ? "studio" : "city"} />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded text-center">
        {isMobile ? "Touchez et glissez pour tourner • Pincez pour zoomer" : "Cliquez et glissez pour contrôler la vue"}
      </div>
    </div>
  );
};

export default Robot3D;