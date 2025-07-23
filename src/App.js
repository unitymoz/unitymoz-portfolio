import React from 'react';
import './App.css';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSplash from './LoadingSplash';
import { useEffect, useState } from 'react';

// Estrutura inicial do portfólio UnityMoz
function App() {
  // Estado para exibir/esconder botão de voltar ao topo
  const [showScrollTop, setShowScrollTop] = useState(false);
  // Estado para splash de loading
  const [loading, setLoading] = useState(true);
  // Estado do modo escuro/claro
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('unitymoz-darkmode') === 'true';
  });

  // Aplica classe no body ao trocar modo
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('unitymoz-darkmode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Splash de loading inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Função para rolar suavemente ao topo
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle do modo escuro/claro
  const handleToggleDark = () => setDarkMode((d) => !d);

  return (
    <>
      <LoadingSplash show={loading} />
      <div className="App bg-white text-dark" aria-hidden={loading}>
        <Navbar darkMode={darkMode} onToggleDark={handleToggleDark} />
        {/* Hero Section */}
        <HeroSection />

        {/* Sobre Mim */}
        <AboutSection />

        {/* Projetos */}
        <ProjectsSection />

        {/* Serviços */}
        <ServicesSection />

        {/* Contacto */}
        <ContactSection />
        {/* Botão flutuante de voltar ao topo */}
        {showScrollTop && (
          <button id="scrollTopBtn" onClick={scrollToTop} aria-label="Voltar ao topo">
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
