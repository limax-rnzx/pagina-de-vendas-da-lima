import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTrajectory } from './components/AboutTrajectory';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForBudget, setSelectedServiceForBudget] = useState<string>('Desenvolvimento de SaaS Personalizados');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBudget(serviceTitle);
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden antialiased">
      {/* Sticky Header Navbar */}
      <Navbar onOpenBudgetModal={() => handleSelectService('Desenvolvimento de SaaS Personalizados')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBudgetModal={() => handleSelectService('Desenvolvimento de SaaS Personalizados')} />

        {/* 2. Trajetória & Sobre Mim */}
        <AboutTrajectory />

        {/* 3. Meus Serviços */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Diferenciais */}
        <Differentials />

        {/* 5. Projetos Desenvolvidos */}
        <Projects onSelectService={handleSelectService} />

        {/* 6. Depoimentos de Clientes */}
        <Testimonials />

        {/* 7. Perguntas Frequentes (FAQ) */}
        <FAQSection />

        {/* 8. Contato & Simulador de Orçamento */}
        <ContactSection initialServiceTitle={selectedServiceForBudget} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}
