import { Heart, Shield, CheckCircle, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState, useRef, useEffect } from 'react';

interface HeroSectionProps {
  onDonateClick: () => void;
}

// Valores iniciais (reseta ao recarregar F5)
const INITIAL_GOAL = 150000;
const INITIAL_RAISED = 130500;
const MAX_GOAL = 500000; // Reset quando atingir

export const HeroSection = ({ onDonateClick }: HeroSectionProps) => {
  const [goal, setGoal] = useState(INITIAL_GOAL);
  const [raised, setRaised] = useState(INITIAL_RAISED);
  const [progress, setProgress] = useState(Math.round((INITIAL_RAISED / INITIAL_GOAL) * 100));
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showUnmuteButton, setShowUnmuteButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsTimer = useRef<NodeJS.Timeout | null>(null);

  const resetHideControlsTimer = () => {
    // Limpa o timer anterior
    if (hideControlsTimer.current) {
      clearTimeout(hideControlsTimer.current);
    }
    
    // Mostra os controles
    setShowControls(true);
    
    // Define novo timer para esconder após 3 segundos
    hideControlsTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
    resetHideControlsTimer();
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
    resetHideControlsTimer();
  };

  const handleVideoClick = () => {
    resetHideControlsTimer();
  };

  // Inicia o timer quando o componente monta
  useEffect(() => {
    resetHideControlsTimer();
    
    return () => {
      if (hideControlsTimer.current) {
        clearTimeout(hideControlsTimer.current);
      }
    };
  }, []);

  // Garante que o vídeo inicie automaticamente
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        // Sempre inicia mutado e mostra o botão na primeira vez
        setIsMuted(true);
        setShowUnmuteButton(true);
        videoRef.current.muted = true;
        
        try {
          await videoRef.current.play();
        } catch (err) {
          console.error('Erro ao iniciar vídeo:', err);
        }
      }
    };

    // Pequeno delay para garantir que o vídeo está carregado
    const timer = setTimeout(playVideo, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Função para ativar o som
  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setShowUnmuteButton(false);
    }
  };

  // Atualiza o progresso sempre que raised ou goal mudar (NUNCA DIMINUI)
  useEffect(() => {
    const newProgress = Math.round((raised / goal) * 100);
    setProgress((prev) => {
      // Garante que o progresso nunca diminui
      return newProgress > prev ? newProgress : prev;
    });
  }, [raised, goal]);

  // Aumenta o valor arrecadado a cada 8-15 segundos (NUNCA DIMINUI)
  useEffect(() => {
    const raisedTimer = setInterval(() => {
      setRaised((prev) => {
        const increase = Math.floor(Math.random() * 250) + 150; // +R$ 150 a +R$ 400
        const newValue = prev + increase;
        
        // Reset quando a meta atingir o máximo
        if (goal >= MAX_GOAL) {
          setGoal(INITIAL_GOAL);
          setProgress(Math.round((INITIAL_RAISED / INITIAL_GOAL) * 100));
          return INITIAL_RAISED;
        }
        
        return newValue;
      });
    }, Math.random() * 7000 + 8000); // Entre 8 e 15 segundos
    
    return () => clearInterval(raisedTimer);
  }, [goal]);

  // Aumenta a meta gradualmente a cada 30-40 segundos (menos frequente que o valor arrecadado)
  useEffect(() => {
    const goalTimer = setInterval(() => {
      setGoal((prev) => {
        // Se já atingiu o máximo, reseta
        if (prev >= MAX_GOAL) {
          return INITIAL_GOAL;
        }
        
        const increase = Math.floor(Math.random() * 600) + 300; // +R$ 300 a +R$ 900 (menor que o aumento do raised)
        const newValue = prev + increase;
        
        // Não ultrapassa o máximo
        return Math.min(newValue, MAX_GOAL);
      });
    }, Math.random() * 10000 + 30000); // Entre 30 e 40 segundos
    
    return () => clearInterval(goalTimer);
  }, []);

  return (
    <section className="gradient-hero py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <div className="text-center mb-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft mb-6">
              <span className="w-2 h-2 bg-pride-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                🏳️‍🌈 Campanha Oficial de Apoio à Diversidade
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Juntos pela{' '}
              <span className="text-gradient-pride">Diversidade</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Apoie a comunidade LGBT+ e receba seu Kit Orgulho completo em casa! 
              Junte-se a mais de <strong className="text-foreground">12 mil apoiadores</strong> que estão fazendo a diferença.
            </p>

            {/* Progress Bar */}
            <div className="bg-card rounded-2xl p-6 shadow-card mb-6 max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-muted-foreground">Meta da campanha</span>
                <span className="text-sm font-bold text-primary">{progress}% alcançado</span>
              </div>
              <div className="relative mb-3">
                <Progress value={progress} className="h-4 bg-muted" />
                <div 
                  className="absolute top-0 left-0 h-4 rounded-full gradient-pride transition-all duration-1000 ease-out overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  {/* Efeito de iluminação que se move da esquerda para direita */}
                  <div className="absolute inset-0 animate-shimmer" />
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-bold text-foreground">
                  R$ {raised.toLocaleString('pt-BR')}
                </span>
                <span className="text-muted-foreground">
                  de R$ {goal.toLocaleString('pt-BR')}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={onDonateClick}
              size="lg" 
              className="gradient-cta hover:opacity-90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-glow transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Heart className="w-5 h-5 mr-2" />
              Doar Agora e Receber Kit Grátis
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-pride-green" />
                <span>Doação 100% segura</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-pride-blue" />
                <span>Transparência total</span>
              </div>
            </div>
          </div>

          {/* Video Below */}
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-card mt-8 max-w-md mx-auto">
            <div className="aspect-[9/16] relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                onClick={handleVideoClick}
              >
                <source
                  src="/hero-video.mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta vídeos.
              </video>
              
              {/* Video Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" 
              />

              {/* Botão para Ativar Som */}
              {showUnmuteButton && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10">
                  <button
                    onClick={handleUnmute}
                    className="gradient-cta text-primary-foreground font-bold px-8 py-6 rounded-2xl shadow-glow hover:scale-105 transition-all animate-pulse"
                  >
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-6 h-6" />
                      <div className="text-left">
                        <div className="text-lg">🎵 Seu vídeo já começou!</div>
                        <div className="text-sm opacity-90">Clique para ativar o som</div>
                      </div>
                    </div>
                  </button>
                </div>
              )}
              
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-card/90 backdrop-blur rounded-full shadow-lg hover:bg-card transition-all hover:scale-110 ${
                  showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{ transition: 'opacity 0.3s ease-in-out' }}
              >
                {isPaused ? (
                  <Play className="w-8 h-8 text-foreground" />
                ) : (
                  <Pause className="w-8 h-8 text-foreground" />
                )}
              </button>
              
              {/* Control Buttons */}
              <div 
                className={`absolute bottom-4 right-4 flex gap-2 transition-all ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.3s ease-in-out' }}
              >
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="p-3 bg-card/90 backdrop-blur rounded-full shadow-lg hover:bg-card transition-all"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </button>
              </div>

              {/* Video Label */}
              <div 
                className={`absolute bottom-4 left-4 bg-card/90 backdrop-blur rounded-lg px-3 py-1.5 text-sm font-medium text-foreground transition-all ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.3s ease-in-out' }}
              >
                🏳️‍🌈 Unidos pela diversidade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
