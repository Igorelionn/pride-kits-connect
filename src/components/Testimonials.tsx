import { Star, CheckCircle, Heart, Package, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
    text: 'Ameiii demais! Recebi meu kit super rápido e a qualidade é incrível. A camiseta ficou perfeita e uso com muito orgulho. Já indiquei pra todas as amigas! 🏳️‍🌈💜',
    rating: 5,
  },
  {
    name: 'Lucas Oliveira',
    avatar: 'L',
    badge: 'Entrega Rápida',
    text: 'Cara, que kit massa! Chegou super rápido, tudo bem embalado e a qualidade surpreendeu demais. O boné é lindo e já estou usando todo dia. Vale muito apoiar essa causa!',
    rating: 5,
  },
  {
    name: 'Camila Santos',
    avatar: 'C',
    badge: 'Perfeito pra Presentear',
    text: 'Comprei 3 kits, um pra mim e dois pra presentear pessoas especiais. Todo mundo amou! A garrafa térmica é maravilhosa e os adesivos já estão espalhados por todo lugar 🌈',
    rating: 5,
  },
  {
    name: 'Rafael Mendes',
    avatar: 'R',
    badge: 'Compra Verificada',
    text: 'Finalmente uma campanha que realmente entrega o que promete! Kit completo, qualidade excelente e entrega antes do prazo. Super recomendo para todos!',
    rating: 5,
  },
  {
    name: 'Julia Pereira',
    avatar: 'J',
    badge: 'Entrega Rápida',
    text: 'A pulseira é linda demais! Uso todos os dias e já recebi vários elogios. A causa é importante e o kit é a cereja do bolo. Obrigada por tudo! 💕🏳️‍🌈',
    rating: 5,
  },
  {
    name: 'Thiago Costa',
    avatar: 'T',
    badge: 'Compra Verificada',
    text: 'Apoiei sem esperar muito e fui surpreendido! A camiseta tem um caimento perfeito, o boné é super confortável. Valeu cada centavo investido nessa causa!',
    rating: 5,
  },
  {
    name: 'Mariana Alves',
    avatar: 'M',
    badge: 'Perfeito pra Presentear',
    text: 'Dei de presente de aniversário pra minha melhor amiga e ela amou! Chegou super rápido e bem embalado. Com certeza vou comprar mais. Parabéns pelo trabalho!',
    rating: 5,
  },
  {
    name: 'Pedro Henrique',
    avatar: 'P',
    badge: 'Compra Verificada',
    text: 'Excelente iniciativa! Além de apoiar uma causa tão importante, ainda recebi um kit de altíssima qualidade. Os adesivos são super criativos. Recomendo demais! 🌈',
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

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

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card shadow-card hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card shadow-card hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-background rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-all h-full">
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
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-primary w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-4 md:hidden">
            <Button variant="outline" size="sm" onClick={prevSlide}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide}>
              Próximo
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
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
