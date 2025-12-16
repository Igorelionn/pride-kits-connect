import { Package, DollarSign, MapPin, Users, Heart } from 'lucide-react';

const impactStats = [
  { value: '4.892', label: 'Kits Distribuídos', icon: Package },
  { value: 'R$ 147K', label: 'Doações Arrecadadas', icon: DollarSign },
  { value: '24', label: 'Estados Atendidos', icon: MapPin },
  { value: '7.200', label: 'Apoiadores', icon: Users },
];

const resourceAllocation = [
  { label: 'Apoio a ONGs e Casas de Acolhimento LGBT+', percentage: 50, bgColor: 'bg-pride-purple' },
  { label: 'Campanhas de Conscientização e Educação', percentage: 30, bgColor: 'bg-pride-blue' },
  { label: 'Kits e Logística de Entrega', percentage: 15, bgColor: 'bg-pride-pink' },
  { label: 'Administração', percentage: 5, bgColor: 'bg-muted-foreground' },
];

export const ImpactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-pride-blue/10 text-pride-blue text-sm font-medium mb-4">
            📊 NOSSO IMPACTO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Juntos, Fazemos a <span className="text-gradient-pride">Diferença</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="font-display text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Transparency Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-bold text-center text-foreground mb-6">
            Transparência dos Recursos
          </h3>
          
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="space-y-4">
              {resourceAllocation.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{item.label}</span>
                    <span className="text-primary font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.bgColor} rounded-full transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mt-8 text-center">
            <p className="text-muted-foreground italic mb-4">
              "Cada kit distribuído representa mais força para nossa comunidade. Unidos, levamos amor, respeito e esperança para quem acredita em um mundo mais inclusivo!"
            </p>
            <footer className="text-sm text-foreground font-medium">
              — Coordenadores da Campanha Juntos pela Diversidade
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
