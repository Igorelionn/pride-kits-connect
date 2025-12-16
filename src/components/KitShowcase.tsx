import { Shirt, Award, Droplets, CircleDot, Sticker } from 'lucide-react';

const kitItems = [
  {
    icon: Shirt,
    name: 'Camiseta Pride',
    description: 'Camiseta de alta qualidade com estampa exclusiva do arco-íris e mensagem de amor e respeito',
    bgColor: 'bg-pride-purple/10',
    iconColor: 'text-pride-purple',
  },
  {
    icon: Award,
    name: 'Boné Orgulho',
    description: 'Boné com bordado da bandeira do orgulho LGBT+ em cores vibrantes',
    bgColor: 'bg-pride-blue/10',
    iconColor: 'text-pride-blue',
  },
  {
    icon: Droplets,
    name: 'Garrafa Pride',
    description: 'Garrafa térmica com as cores do arco-íris, perfeita para o dia a dia',
    bgColor: 'bg-pride-green/10',
    iconColor: 'text-pride-green',
  },
  {
    icon: CircleDot,
    name: 'Pulseira Orgulho',
    description: 'Pulseira de silicone colorida com as cores da diversidade',
    bgColor: 'bg-pride-yellow/10',
    iconColor: 'text-pride-yellow',
  },
  {
    icon: Sticker,
    name: 'Adesivos Exclusivos',
    description: 'Cartela com adesivos Pride e mensagens de inclusão e amor',
    bgColor: 'bg-pride-pink/10',
    iconColor: 'text-pride-pink',
  },
];

export const KitShowcase = () => {
  return (
    <section className="py-16 gradient-pride-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-card text-primary text-sm font-medium mb-4 shadow-soft">
            🎁 O QUE ESTÁ INCLUSO
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kit Completo <span className="text-gradient-pride">Juntos pela Diversidade</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Itens de qualidade premium para você demonstrar seu apoio à causa LGBT+
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {kitItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
