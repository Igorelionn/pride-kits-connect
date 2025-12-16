import { Star, CheckCircle, Heart, Package, Users } from 'lucide-react';

const stats = [
  { value: '4.892', label: 'Kits Entregues', icon: Package },
  { value: '4.8/5.0', label: 'Avaliação Média', icon: Star },
  { value: '96%', label: 'Satisfação', icon: Heart },
  { value: '7.200+', label: 'Apoiadores Ativos', icon: Users },
];

const testimonials = [
  {
    name: 'Fernanda Lima',
    avatar: 'F',
    badge: 'Compra Verificada',
    badgeType: 'verified',
    text: 'Ameiii demais! Recebi meu kit super rápido e a qualidade é incrível. A camiseta ficou perfeita e uso com muito orgulho. Já indiquei pra todas as amigas! 🏳️‍🌈💜',
    rating: 5,
  },
  {
    name: 'Lucas Oliveira',
    avatar: 'L',
    badge: 'Entrega Rápida',
    badgeType: 'fast',
    text: 'Cara, que kit massa! Chegou super rápido, tudo bem embalado e a qualidade surpreendeu demais. O boné é lindo e já estou usando todo dia. Vale muito apoiar essa causa!',
    rating: 5,
  },
  {
    name: 'Camila Santos',
    avatar: 'C',
    badge: 'Perfeito pra Presentear',
    badgeType: 'gift',
    text: 'Comprei 3 kits, um pra mim e dois pra presentear pessoas especiais. Todo mundo amou! A garrafa térmica é maravilhosa e os adesivos já estão espalhados por todo lugar 🌈',
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-pride-green/10 text-pride-green text-sm font-medium mb-4">
            💬 DEPOIMENTOS REAIS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Apoiadores Dizem
          </h2>
          <p className="text-muted-foreground">
            Veja o que nossos apoiadores estão dizendo sobre o Kit Orgulho
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background rounded-xl p-4 text-center border border-border"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-display text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full gradient-pride flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-pride-green">
                    <CheckCircle className="w-3 h-3" />
                    {testimonial.badge}
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-pride-yellow fill-pride-yellow"
                  />
                ))}
              </div>

              <p className="text-foreground/90 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-pride-blue" />
            <span>Entrega Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-pride-green" />
            <span>Qualidade Certificada</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pride-pink" />
            <span>96% Recomendam</span>
          </div>
        </div>
      </div>
    </section>
  );
};
