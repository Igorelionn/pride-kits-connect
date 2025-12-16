import { CheckCircle, Heart, Package, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  const orderNumber = `ORG${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Success Card */}
        <div className="bg-card rounded-3xl p-8 shadow-card text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-pride flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>

          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            Obrigado pelo seu apoio! 🏳️‍🌈
          </h1>
          
          <p className="text-muted-foreground mb-6">
            Sua doação foi confirmada com sucesso. Juntos estamos fazendo a diferença na luta pela diversidade!
          </p>

          {/* Order Info */}
          <div className="bg-muted/50 rounded-xl p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-1">Número do pedido</p>
            <p className="font-display font-bold text-xl text-foreground">#{orderNumber}</p>
          </div>

          {/* Next Steps */}
          <div className="text-left space-y-4 mb-8">
            <h3 className="font-display font-bold text-foreground flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Próximos passos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-pride-purple/10 text-pride-purple flex items-center justify-center flex-shrink-0 font-bold text-xs">1</span>
                Você receberá um e-mail de confirmação com os detalhes da sua doação
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-pride-blue/10 text-pride-blue flex items-center justify-center flex-shrink-0 font-bold text-xs">2</span>
                Seu Kit Orgulho será preparado e enviado em até 7 dias úteis
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-pride-green/10 text-pride-green flex items-center justify-center flex-shrink-0 font-bold text-xs">3</span>
                Você receberá o código de rastreio por e-mail
              </li>
            </ul>
          </div>

          {/* Share */}
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-4 mb-6">
            <p className="text-sm text-foreground mb-3 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-pride-pink" />
              Compartilhe e ajude a causa!
            </p>
            <Button variant="outline" className="w-full gap-2">
              <Share2 className="w-4 h-4" />
              Compartilhar nas redes sociais
            </Button>
          </div>

          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o início
            </Button>
          </Link>
        </div>

        {/* Bottom Message */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          💜 Cada doação representa mais força para nossa comunidade. Obrigado por fazer parte!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
