import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Power, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw,
  RotateCw,
  Square,
  Wifi,
  WifiOff
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RemoteControl = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentMode, setCurrentMode] = useState<'suiveur' | 'autonome' | 'manuel'>('manuel');
  const [robotStatus, setRobotStatus] = useState('Arrêté');
  const { toast } = useToast();

  const handleConnection = () => {
    setIsConnected(!isConnected);
    setRobotStatus(isConnected ? 'Arrêté' : 'En attente');
    toast({
      title: isConnected ? "Déconnecté" : "Connecté",
      description: isConnected ? "Robot déconnecté avec succès" : "Connexion établie avec JONYKO",
    });
  };

  const handleModeChange = (mode: typeof currentMode) => {
    if (!isConnected) {
      toast({
        title: "Erreur",
        description: "Veuillez d'abord vous connecter au robot",
        variant: "destructive",
      });
      return;
    }
    setCurrentMode(mode);
    setRobotStatus(`Mode ${mode}`);
    toast({
      title: "Mode changé",
      description: `Basculement vers le mode ${mode}`,
    });
  };

  const handleMovement = (direction: string) => {
    if (!isConnected) {
      toast({
        title: "Erreur",
        description: "Robot non connecté",
        variant: "destructive",
      });
      return;
    }
    if (currentMode !== 'manuel') {
      toast({
        title: "Erreur",
        description: "Les commandes manuelles ne sont disponibles qu'en mode manuel",
        variant: "destructive",
      });
      return;
    }
    setRobotStatus(`Mouvement: ${direction}`);
    toast({
      title: "Commande envoyée",
      description: `Robot en mouvement: ${direction}`,
    });
    
    // Reset status after 2 seconds
    setTimeout(() => {
      setRobotStatus('Mode manuel');
    }, 2000);
  };

  const handleEmergencyStop = () => {
    if (!isConnected) return;
    setRobotStatus('Arrêt d\'urgence');
    toast({
      title: "Arrêt d'urgence",
      description: "Robot arrêté immédiatement",
      variant: "destructive",
    });
  };

  return (
    <section id="commande" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Interface de Contrôle
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Commande à Distance
            <span className="block text-primary">JONYKO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contrôlez votre robot agricole JONYKO à distance avec cette interface intuitive
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Connection & Status */}
          <Card className="animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500 animate-glow-pulse' : 'bg-red-500'}`} />
                État de Connexion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Connection Button */}
              <Button 
                onClick={handleConnection}
                className={`w-full ${isConnected ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-primary'}`}
              >
                {isConnected ? <WifiOff className="h-4 w-4 mr-2" /> : <Wifi className="h-4 w-4 mr-2" />}
                {isConnected ? 'Déconnecter' : 'Connecter'}
              </Button>

              {/* Status Display */}
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">État:</span>
                  <Badge variant={isConnected ? 'default' : 'secondary'}>
                    {robotStatus}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Mode actuel:</span>
                  <Badge variant="outline">{currentMode}</Badge>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="space-y-3">
                <h4 className="font-medium">Sélection du Mode</h4>
                <div className="grid grid-cols-3 gap-2">
                  {(['suiveur', 'autonome', 'manuel'] as const).map((mode) => (
                    <Button
                      key={mode}
                      variant={currentMode === mode ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleModeChange(mode)}
                      className="text-xs capitalize"
                    >
                      {mode}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Manual Controls */}
          <Card className="animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Power className="h-5 w-5" />
                Contrôles Manuels
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Directional Controls */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div></div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleMovement('Avant')}
                  disabled={!isConnected || currentMode !== 'manuel'}
                  className="aspect-square"
                >
                  <ChevronUp className="h-6 w-6" />
                </Button>
                <div></div>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleMovement('Gauche')}
                  disabled={!isConnected || currentMode !== 'manuel'}
                  className="aspect-square"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleMovement('Arrière')}
                  disabled={!isConnected || currentMode !== 'manuel'}
                  className="aspect-square"
                >
                  <ChevronDown className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleMovement('Droite')}
                  disabled={!isConnected || currentMode !== 'manuel'}
                  className="aspect-square"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Rotation Controls */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                  variant="outline"
                  onClick={() => handleMovement('Rotation gauche')}
                  disabled={!isConnected || currentMode !== 'manuel'}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Rotation G
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleMovement('Rotation droite')}
                  disabled={!isConnected || currentMode !== 'manuel'}
                  className="flex items-center gap-2"
                >
                  <RotateCw className="h-4 w-4" />
                  Rotation D
                </Button>
              </div>

              {/* Emergency Stop */}
              <Button
                variant="destructive"
                size="lg"
                onClick={handleEmergencyStop}
                disabled={!isConnected}
                className="w-full"
              >
                <Square className="h-4 w-4 mr-2" />
                ARRÊT D'URGENCE
              </Button>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h5 className="font-medium mb-2 text-sm">Instructions:</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>1. Connectez-vous au robot</li>
                  <li>2. Sélectionnez le mode souhaité</li>
                  <li>3. Utilisez les contrôles en mode manuel</li>
                  <li>4. Arrêt d'urgence toujours accessible</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Robot Visualization */}
        <div className="mt-12 flex justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Card className="p-8 text-center max-w-md">
            <div className="relative mb-4">
              <div className={`text-6xl mb-4 transition-all duration-500 ${isConnected ? 'animate-float' : ''}`}>
                🤖
              </div>
              <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${isConnected ? 'bg-green-500 animate-glow-pulse' : 'bg-gray-400'}`} />
            </div>
            <h3 className="font-semibold mb-2">JONYKO Robot</h3>
            <p className="text-sm text-muted-foreground">
              {isConnected ? `Mode: ${currentMode} | ${robotStatus}` : 'Robot déconnecté'}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RemoteControl;