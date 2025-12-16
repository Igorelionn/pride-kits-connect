import { useState, useEffect } from 'react';
import { Clock, Users, Gift } from 'lucide-react';

export const UrgencyHeader = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 46,
    seconds: 35,
  });

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
              hours = 23;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
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
          <span className="font-bold">1.247</span> doações nas últimas 24h
        </div>
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4" />
          <span>Apenas <span className="font-bold">127</span> kits restantes</span>
        </div>
      </div>
    </div>
  );
};
