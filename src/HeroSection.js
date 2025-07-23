import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSection: Seção principal do portfólio de Ivan Eusébio
 * Layout: imagem retangular à esquerda, informações à direita (responsivo).
 */
function HeroSection() {
  // Função para scroll suave até a seção de contato
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.section
      id="hero"
      className="min-vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center bg-white text-center text-md-start gap-4 container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      role="region"
      aria-label="Seção principal: Ivan Eusébio, Founder & CEO da UnityMoz"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      {/* Imagem retangular à esquerda */}
      <motion.img
        src={process.env.PUBLIC_URL + '/CEO.jpg'}
        alt="Avatar de Ivan Eusébio, Founder & CEO da UnityMoz"
        className="shadow mb-4 mb-md-0"
        style={{ width: 260, height: 340, objectFit: 'cover', border: '4px solid #e10600', borderRadius: 18 }}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
      />
      {/* Informações à direita */}
      <motion.div
        className="d-flex flex-column align-items-center align-items-md-start justify-content-center flex-1"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
      >
        <h1 className="fw-bold" style={{ color: '#e10600' }}>Ivan Eusébio</h1>
        <h2 className="mb-3">Founder &amp; CEO da UnityMoz</h2>
        <p className="lead mx-auto mx-md-0" style={{ maxWidth: 500 }}>
          Missão: Inovar, educar e impactar Moçambique através da tecnologia.
        </p>
        {/* CTA: Botão para contato */}
        <motion.button
          className="btn btn-danger btn-lg mt-3 px-4 py-2 fw-semibold shadow"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          onClick={scrollToContact}
          aria-label="Fale comigo"
        >
          <i className="fas fa-paper-plane me-2" aria-hidden="true"></i>
          Fale comigo
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection; 