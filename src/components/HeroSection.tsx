import { Heart, Shield, CheckCircle, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState, useRef } from 'react';

interface HeroSectionProps {
  onDonateClick: () => void;
}

export const HeroSection = ({ onDonateClick }: HeroSectionProps) => {
  const progress = 87;
  const goal = 150000;
  const raised = 130500;
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="gradient-hero py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
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
              
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                Apoie a comunidade LGBT+ e receba seu Kit Orgulho completo em casa! 
                Junte-se a mais de <strong className="text-foreground">12 mil apoiadores</strong> que estão fazendo a diferença.
              </p>

              {/* Progress Bar */}
              <div className="bg-card rounded-2xl p-6 shadow-card mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-muted-foreground">Meta da campanha</span>
                  <span className="text-sm font-bold text-primary">{progress}% alcançado</span>
                </div>
                <div className="relative mb-3">
                  <Progress value={progress} className="h-4 bg-muted" />
                  <div 
                    className="absolute top-0 left-0 h-4 rounded-full gradient-pride transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 text-sm text-muted-foreground">
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

            {/* Right - Video */}
            <div className="relative rounded-2xl overflow-hidden shadow-card bg-card">
              <div className="aspect-video relative">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster="https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&q=80"
                >
                  <source
                    src="https://cdn.coverr.co/videos/coverr-lgbt-pride-flag-waving-7453/1080p.mp4"
                    type="video/mp4"
                  />
                  Seu navegador não suporta vídeos.
                </video>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 p-3 bg-card/90 backdrop-blur rounded-full shadow-lg hover:bg-card transition-all"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </button>

                {/* Video Label */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur rounded-lg px-3 py-1.5 text-sm font-medium text-foreground">
                  🏳️‍🌈 Unidos pela diversidade
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
