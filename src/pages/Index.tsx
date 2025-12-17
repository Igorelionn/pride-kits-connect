import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UrgencyHeader } from '@/components/UrgencyHeader';
import { HeroSection } from '@/components/HeroSection';
import { DonationValues } from '@/components/DonationValues';
import { BenefitsComparison } from '@/components/BenefitsComparison';
import { KitShowcase } from '@/components/KitShowcase';
import { Testimonials } from '@/components/Testimonials';
import { ImpactSection } from '@/components/ImpactSection';
import { Footer } from '@/components/Footer';
import { DonationNotification } from '@/components/DonationNotification';
import { OrderBumpModal } from '@/components/OrderBumpModal';

const Index = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectValue = (value: number) => {
    setSelectedValue(value);
    
    // Se for doação de R$ 500, vai direto para agradecimento (sem order bumps)
    if (value >= 500) {
      navigate('/obrigado');
    } else {
      // Caso contrário, abre o modal de order bumps
      setIsModalOpen(true);
    }
  };

  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <UrgencyHeader />
      <HeroSection onDonateClick={scrollToDonate} />
      <DonationValues 
        selectedValue={selectedValue} 
        onSelectValue={handleSelectValue} 
      />
      <BenefitsComparison onSelectPlan={handleSelectValue} />
      <KitShowcase />
      <Testimonials />
      <ImpactSection />
      <Footer />
      
      {/* Donation Notification */}
      <DonationNotification />
      
      {/* Order Bump Modal */}
      <OrderBumpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedValue={selectedValue || 30}
      />
    </div>
  );
};

export default Index;
