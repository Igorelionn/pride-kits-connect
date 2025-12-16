import camisetaPride from '@/assets/camiseta-pride.png';
import bonePride from '@/assets/bone-pride.png';
import garrafaPride from '@/assets/garrafa-pride.png';
import pulseiraPride from '@/assets/pulseira-pride.png';
import adesivosPride from '@/assets/adesivos-pride.png';

const kitItems = [
  {
    image: camisetaPride,
    name: 'Camiseta Pride',
    description: 'Camiseta de alta qualidade com estampa exclusiva do arco-íris e mensagem de amor e respeito',
  },
  {
    image: bonePride,
    name: 'Boné Orgulho',
    description: 'Boné com bordado da bandeira do orgulho LGBT+ em cores vibrantes',
  },
  {
    image: garrafaPride,
    name: 'Garrafa Pride',
    description: 'Garrafa térmica com as cores do arco-íris, perfeita para o dia a dia',
  },
  {
    image: pulseiraPride,
    name: 'Pulseira Orgulho',
    description: 'Pulseira de silicone colorida com as cores da diversidade',
  },
  {
    image: adesivosPride,
    name: 'Adesivos Exclusivos',
    description: 'Cartela com adesivos Pride e mensagens de inclusão e amor',
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
              className="bg-card rounded-2xl p-4 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full aspect-square mb-4 rounded-xl overflow-hidden bg-muted/20">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
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
