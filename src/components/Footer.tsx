import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-pride flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-xl">
                Juntos pela Diversidade
              </span>
            </div>
            <p className="text-background/70 max-w-sm">
              Espalhando amor, respeito e apoio à comunidade LGBT+ e todas as pessoas que celebram a diversidade. Unidos por um mundo mais inclusivo.
            </p>
            <p className="mt-4 text-sm text-background/50">
              🏳️‍🌈 Feito com amor e orgulho
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Nossa Missão</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li>Kit Juntos pela Diversidade</li>
              <li>Impacto Social</li>
              <li>Transparência</li>
              <li>Movimento Nacional</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@juntosdiversidade.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (11) 99832-4598
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>
              © 2025 Juntos pela Diversidade. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Amor é amor! 🌈
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
