import { useState } from 'react';
import { Check, Star, Gift, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const donationOptions = [
  { value: 20, label: 'R$ 20', hasKit: false },
  { value: 25, label: 'R$ 25', hasKit: false },
  { value: 30, label: 'R$ 30', hasKit: true, popular: true, discount: 'MAIS ESCOLHIDO' },
  { value: 40, label: 'R$ 40', hasKit: true },
  { value: 60, label: 'R$ 60', hasKit: true },
  { value: 100, label: 'R$ 100', hasKit: true },
  { value: 150, label: 'R$ 150', hasKit: true },
  { value: 250, label: 'R$ 250', hasKit: true },
  { value: 500, label: 'R$ 500', hasKit: true },
];

interface DonationValuesProps {
  onSelectValue: (value: number) => void;
  selectedValue: number | null;
}

export const DonationValues = ({ onSelectValue, selectedValue }: DonationValuesProps) => {
  return (
    <section id="donate" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              ✨ ESCOLHA SEU APOIO
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Escolha Seu Valor de Apoio
            </h2>
            <p className="text-muted-foreground">
              A partir de <strong className="text-foreground">R$30</strong> você recebe o Kit Orgulho completo + Frete Grátis
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 mb-8">
            {donationOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onSelectValue(option.value)}
                className={cn(
                  "relative p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105",
                  selectedValue === option.value
                    ? "border-primary bg-primary/5 shadow-glow"
                    : "border-border bg-background hover:border-primary/50",
                  option.popular && "ring-2 ring-pride-yellow ring-offset-2"
                )}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-pride-yellow text-foreground text-[10px] font-bold rounded-full whitespace-nowrap">
                    ⭐ {option.discount}
                  </div>
                )}
                <span className="font-display font-bold text-lg text-foreground">
                  {option.label}
                </span>
                {option.hasKit && (
                  <div className="mt-1 text-[10px] font-medium text-pride-purple">
                    KIT GRÁTIS
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-6 border border-border">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Truck className="w-8 h-8 text-pride-blue" />
                <span className="font-medium text-foreground">Entrega grátis em todo Brasil</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Gift className="w-8 h-8 text-pride-purple" />
                <span className="font-medium text-foreground">Kit Orgulho Grátis</span>
                <span className="text-xs text-muted-foreground">Em doações acima de R$30</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Check className="w-8 h-8 text-pride-green" />
                <span className="font-medium text-foreground">Sua doação faz a diferença</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
