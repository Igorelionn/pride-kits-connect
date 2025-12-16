import { Check, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Apoiador',
    value: 20,
    features: {
      certificate: true,
      kit: false,
      freeShipping: false,
      stickers: false,
      bottle: false,
    },
  },
  {
    name: 'Aliado',
    value: 25,
    features: {
      certificate: true,
      kit: false,
      freeShipping: false,
      stickers: true,
      bottle: false,
    },
  },
  {
    name: 'Defensor',
    value: 30,
    popular: true,
    percentage: '67%',
    features: {
      certificate: true,
      kit: true,
      freeShipping: true,
      stickers: true,
      bottle: false,
    },
  },
  {
    name: 'Guardião',
    value: 40,
    features: {
      certificate: true,
      kit: true,
      freeShipping: true,
      stickers: true,
      bottle: true,
    },
  },
];

interface BenefitsComparisonProps {
  onSelectPlan: (value: number) => void;
}

export const BenefitsComparison = ({ onSelectPlan }: BenefitsComparisonProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            🏳️‍🌈 COMPARE OS BENEFÍCIOS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Escolha Seu Nível de Apoio
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cada contribuição faz a diferença. Escolha o valor que mais se adequa ao seu apoio.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.value}
              className={cn(
                "relative bg-card rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-card",
                plan.popular
                  ? "border-primary shadow-glow scale-105 z-10"
                  : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-cta text-primary-foreground text-xs font-bold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" fill="currentColor" />
                  MAIS VANTAJOSO
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {plan.name}
                </h3>
                <div className="font-display text-3xl font-bold text-primary">
                  R$ {plan.value}
                </div>
                {plan.percentage && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Escolha de {plan.percentage} dos apoiadores
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                <FeatureItem included={plan.features.certificate}>
                  Certificado digital
                </FeatureItem>
                <FeatureItem included={plan.features.kit}>
                  Kit Orgulho completo
                </FeatureItem>
                <FeatureItem included={plan.features.freeShipping}>
                  Frete grátis
                </FeatureItem>
                <FeatureItem included={plan.features.stickers}>
                  Adesivos exclusivos
                </FeatureItem>
                <FeatureItem included={plan.features.bottle}>
                  Garrafa térmica Pride
                </FeatureItem>
              </ul>

              <Button
                onClick={() => onSelectPlan(plan.value)}
                className={cn(
                  "w-full font-bold",
                  plan.popular
                    ? "gradient-cta text-primary-foreground hover:opacity-90"
                    : "bg-muted text-foreground hover:bg-muted/80"
                )}
              >
                {plan.popular ? 'ESCOLHER ESTE' : 'SELECIONAR'}
              </Button>
            </div>
          ))}
        </div>

        {/* Other values */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ou escolha outro valor de contribuição:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[60, 100, 150, 250, 500].map((value) => (
              <button
                key={value}
                onClick={() => onSelectPlan(value)}
                className="px-6 py-2 rounded-lg border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all font-medium text-foreground"
              >
                R$ {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ included, children }: { included: boolean; children: React.ReactNode }) => (
  <li className="flex items-center gap-2 text-sm">
    {included ? (
      <Check className="w-4 h-4 text-pride-green flex-shrink-0" />
    ) : (
      <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
    )}
    <span className={cn(included ? "text-foreground" : "text-muted-foreground/50")}>
      {children}
    </span>
  </li>
);
