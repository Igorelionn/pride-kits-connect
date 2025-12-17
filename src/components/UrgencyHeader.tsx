import { useState, useEffect } from 'react';
import { Clock, Users, Gift } from 'lucide-react';

// Valores iniciais
const INITIAL_TIME = { hours: 5, minutes: 47, seconds: 23 };
const INITIAL_DONATIONS = 1247;
const INITIAL_KITS = 127;
const MIN_KITS = 15; // Nunca abaixo disso
const MAX_DONATIONS = 50000; // Reset quando atingir

export const UrgencyHeader = () => {
  // Sempre começa com valores iniciais (reseta ao recarregar F5)
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [donations, setDonations] = useState(INITIAL_DONATIONS);
  const [kitsLeft, setKitsLeft] = useState(INITIAL_KITS);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              // Reseta para 5 horas quando chegar a zero
              hours = 5;
              minutes = 0;
              seconds = 0;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Aumenta doações a cada 8-15 segundos (NUNCA DIMINUI, só reseta no máximo)
  useEffect(() => {
    const donationTimer = setInterval(() => {
      setDonations((prev) => {
        const increase = Math.floor(Math.random() * 3) + 1; // +1 a +3
        const newValue = prev + increase;
        
        // Reset quando atingir o máximo
        if (newValue >= MAX_DONATIONS) {
          return INITIAL_DONATIONS;
        }
        
        return newValue;
      });
    }, Math.random() * 7000 + 8000); // Entre 8 e 15 segundos
    
    return () => clearInterval(donationTimer);
  }, []);

  // Diminui kits a cada 12-20 segundos (NUNCA AUMENTA, só diminui até o mínimo)
  useEffect(() => {
    const kitsTimer = setInterval(() => {
      setKitsLeft((prev) => {
        // Se já está no mínimo, mantém
        if (prev <= MIN_KITS) {
          return MIN_KITS;
        }
        
        const decrease = Math.floor(Math.random() * 2) + 1; // -1 ou -2
        const newValue = prev - decrease;
        
        // Nunca abaixo do mínimo
        return Math.max(newValue, MIN_KITS);
      });
    }, Math.random() * 8000 + 12000); // Entre 12 e 20 segundos
    
    return () => clearInterval(kitsTimer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="gradient-pride py-2 px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8 text-primary-foreground text-sm md:text-base font-medium">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Campanha termina em:</span>
          <span className="font-bold font-display">
            {formatNumber(timeLeft.hours)}h : {formatNumber(timeLeft.minutes)}m : {formatNumber(timeLeft.seconds)}s
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span className="font-bold">{donations.toLocaleString('pt-BR')}</span> doações nas últimas 24h
        </div>
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4" />
          <span>Apenas <span className="font-bold">{kitsLeft}</span> kits restantes</span>
        </div>
      </div>
    </div>
  );
};
