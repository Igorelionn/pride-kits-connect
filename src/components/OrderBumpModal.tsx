import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, Gift, Truck, Shield, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OrderBumpModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedValue: number;
}

const bumpOptions = [
  {
    id: 'extra-stickers',
    name: 'Cartela Extra de Adesivos',
    description: 'Mais 10 adesivos exclusivos para espalhar amor',
    price: 5,
    originalPrice: 12,
  },
  {
    id: 'second-shirt',
    name: 'Segunda Camiseta',
    description: 'Camiseta adicional para presentear alguém especial',
    price: 15,
    originalPrice: 35,
  },
  {
    id: 'premium-bottle',
    name: 'Garrafa Premium',
    description: 'Versão premium com isolamento térmico 24h',
    price: 20,
    originalPrice: 45,
  },
];

export const OrderBumpModal = ({ isOpen, onClose, selectedValue }: OrderBumpModalProps) => {
  const [selectedBumps, setSelectedBumps] = useState<string[]>([]);
  const navigate = useNavigate();
  const hasKit = selectedValue >= 30;

  const handleConfirmDonation = () => {
    navigate('/obrigado');
  };

  const toggleBump = (id: string) => {
    setSelectedBumps((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const totalBumps = selectedBumps.reduce((acc, id) => {
    const bump = bumpOptions.find((b) => b.id === id);
    return acc + (bump?.price || 0);
  }, 0);

  const totalValue = selectedValue + totalBumps;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-glow max-w-lg w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="gradient-pride p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground"
          >
            <X className="w-6 h-6" />
          </button>
          <Sparkles className="w-10 h-10 mx-auto mb-3 text-primary-foreground" />
          <h2 className="font-display text-2xl font-bold text-primary-foreground">
            Finalize Sua Doação!
          </h2>
          <p className="text-primary-foreground/90 mt-2">
            Você está doando{' '}
            <strong>R$ {selectedValue}</strong>
            {hasKit && ' e recebendo o Kit Orgulho completo'}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Kit Summary */}
          {hasKit && (
            <div className="bg-pride-green/10 rounded-xl p-4 mb-6 border border-pride-green/20">
              <div className="flex items-center gap-2 text-pride-green font-medium mb-2">
                <Gift className="w-5 h-5" />
                <span>Kit Orgulho Incluído!</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Camiseta Pride exclusiva</li>
                <li>✓ Boné com bordado</li>
                <li>✓ Pulseira colorida</li>
                <li>✓ Cartela de adesivos</li>
                {selectedValue >= 40 && <li>✓ Garrafa térmica Pride</li>}
              </ul>
            </div>
          )}

          {/* Order Bumps */}
          <div className="mb-6">
            <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-pride-pink" />
              Turbine seu apoio!
            </h3>
            <div className="space-y-3">
              {bumpOptions.map((bump) => (
                <button
                  key={bump.id}
                  onClick={() => toggleBump(bump.id)}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 text-left transition-all",
                    selectedBumps.includes(bump.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                        selectedBumps.includes(bump.id)
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      )}
                    >
                      {selectedBumps.includes(bump.id) && (
                        <Check className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">
                          {bump.name}
                        </span>
                        <span className="text-xs line-through text-muted-foreground">
                          R$ {bump.originalPrice}
                        </span>
                        <span className="text-sm font-bold text-pride-green">
                          +R$ {bump.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {bump.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="bg-muted rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Doação:</span>
              <span className="text-foreground">R$ {selectedValue}</span>
            </div>
            {totalBumps > 0 && (
              <div className="flex justify-between items-center mt-2">
                <span className="text-muted-foreground">Extras:</span>
                <span className="text-foreground">R$ {totalBumps}</span>
              </div>
            )}
            <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
              <span className="font-bold text-foreground">Total:</span>
              <span className="font-display text-2xl font-bold text-primary">
                R$ {totalValue}
              </span>
            </div>
          </div>

          {/* CTA */}
          <Button
            onClick={handleConfirmDonation}
            className="w-full gradient-cta text-primary-foreground font-bold py-6 text-lg rounded-xl hover:opacity-90 transition-all"
          >
            Confirmar Doação de R$ {totalValue}
          </Button>

          {/* Trust */}
          <div className="flex justify-center gap-6 mt-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="w-4 h-4" />
              <span>Frete grátis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
