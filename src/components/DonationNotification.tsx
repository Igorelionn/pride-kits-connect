import { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = [
  'Maria S.', 'João P.', 'Ana Clara', 'Pedro H.', 'Juliana M.',
  'Lucas F.', 'Fernanda R.', 'Gabriel S.', 'Camila L.', 'Rafael B.',
  'Beatriz A.', 'Thiago M.', 'Amanda C.', 'Bruno K.', 'Larissa P.',
  'Matheus R.', 'Carolina D.', 'Diego V.', 'Isabela N.', 'Henrique T.',
  'Mariana F.', 'Gustavo O.', 'Letícia S.', 'Felipe M.', 'Renata B.',
  'André L.', 'Patrícia G.', 'Ricardo A.', 'Vanessa C.', 'Eduardo H.',
];

const cities = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Recife',
  'Porto Alegre', 'Curitiba', 'Fortaleza', 'Brasília', 'Manaus',
  'Florianópolis', 'Natal', 'Vitória', 'Goiânia', 'Campinas',
];

const values = [30, 40, 50, 60, 100, 150, 30, 40, 30, 50, 60, 30, 40, 100, 30];

export const DonationNotification = () => {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: '',
    city: '',
    value: 0,
  });

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomValue = values[Math.floor(Math.random() * values.length)];

      setNotification({ name: randomName, city: randomCity, value: randomValue });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then show every 60 seconds
    const interval = setInterval(showNotification, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 max-w-xs transition-all duration-500",
        visible
          ? "animate-slide-in-bottom opacity-100 translate-y-0"
          : "opacity-0 translate-y-full pointer-events-none"
      )}
    >
      <div className="bg-card rounded-xl shadow-glow border border-border p-4 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full gradient-pride flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
          </div>
          <div>
            <p className="text-sm text-foreground">
              <strong>{notification.name}</strong> de {notification.city}
            </p>
            <p className="text-sm text-muted-foreground">
              acabou de doar{' '}
              <strong className="text-pride-green">R$ {notification.value}</strong>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              há poucos segundos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
