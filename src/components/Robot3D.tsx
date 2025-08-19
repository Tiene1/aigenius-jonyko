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
    alpha: true,
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
          position: isMobile ? [0, 0, 30] : [0, 0, 20], 
          fov: isMobile ? 60 : 50,
        }}
        gl={isMobile ? mobileConfig : desktopConfig}
        frameloop={isMobile ? "demand" : "always"}
        style={{ background: 'transparent' }}
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
          enablePan={isMobile ? false : true}
          enableZoom={true}
          enableRotate={true}
          minDistance={isMobile ? 15 : 10}
          maxDistance={isMobile ? 50 : 35}
          autoRotate={false}
          dampingFactor={0.05}
          enableDamping={true}
          target={[0, 0, 0]}
          rotateSpeed={isMobile ? 1.5 : 1.0}
          zoomSpeed={isMobile ? 1.2 : 1.0}
          panSpeed={isMobile ? 0.8 : 1.0}
          touchAction="manipulation"
        />
        
        {/* Environnement adaptatif avec fond clair */}
        <Environment 
          preset={isMobile ? "studio" : "city"} 
          background={true}
          backgroundBlurriness={0.3}
          backgroundIntensity={0.4}
        />
        
        {/* Fond de couleur personnalisé */}
        <color attach="background" args={['#f8fafc']} />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded text-center">
        {isMobile ? "Glissez avec 1 doigt pour pivoter • 2 doigts pour zoomer" : "Cliquez et glissez pour contrôler la vue"}
      </div>
    </div>
  );
};

export default Robot3D;