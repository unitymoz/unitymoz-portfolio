import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFirebase,
  SiSupabase
} from 'react-icons/si'; // Adicione outros ícones se quiser

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
      className="min-vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center bg-white text-center text-md-start gap-4 container position-relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      role="region"
      aria-label="Seção principal: Ivan Eusébio, Founder & CEO da UnityMoz"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      {/* Fundo com ícones */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <SiJavascript style={{ position: 'absolute', top: '10%', left: '5%', fontSize: 60, color: '#f7df1e', opacity: 0.15 }} />
        <SiPython style={{ position: 'absolute', top: '70%', left: '10%', fontSize: 70, color: '#306998', opacity: 0.13 }} />
        <SiReact style={{ position: 'absolute', top: '30%', right: '8%', fontSize: 80, color: '#61dafb', opacity: 0.12 }} />
        <SiNodedotjs style={{ position: 'absolute', bottom: '12%', right: '15%', fontSize: 65, color: '#68a063', opacity: 0.14 }} />
        <SiTypescript style={{ position: 'absolute', top: '55%', left: '40%', fontSize: 50, color: '#3178c6', opacity: 0.13 }} />
        <SiHtml5 style={{ position: 'absolute', top: '20%', left: '60%', fontSize: 55, color: '#e34c26', opacity: 0.12 }} />
        <SiCss3 style={{ position: 'absolute', top: '80%', left: '70%', fontSize: 50, color: '#2965f1', opacity: 0.13 }} />
        <SiDjango style={{ position: 'absolute', top: '60%', right: '5%', fontSize: 60, color: '#092e20', opacity: 0.11 }} />
        <SiMongodb style={{ position: 'absolute', top: '40%', left: '20%', fontSize: 60, color: '#47a248', opacity: 0.12 }} />
        <SiPostgresql style={{ position: 'absolute', bottom: '20%', left: '30%', fontSize: 60, color: '#336791', opacity: 0.12 }} />
        <SiGit style={{ position: 'absolute', top: '5%', right: '20%', fontSize: 50, color: '#f05032', opacity: 0.13 }} />
        <SiDocker style={{ position: 'absolute', bottom: '5%', left: '5%', fontSize: 60, color: '#2496ed', opacity: 0.12 }} />
        <SiFirebase style={{ position: 'absolute', bottom: '30%', right: '30%', fontSize: 55, color: '#ffca28', opacity: 0.13 }} />
        <SiSupabase style={{ position: 'absolute', top: '50%', right: '40%', fontSize: 55, color: '#3ecf8e', opacity: 0.13 }} />
      </div>
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
        {/* Animação de código se transformando em texto */}
        <div style={{ fontFamily: 'monospace', fontSize: 20, color: 'var(--unitymoz-dark)', marginBottom: 12, minHeight: 32, textAlign: 'center' }}>
          <Typewriter
            words={[
              'Ivan Eusébio',
              'Dev Jr. Fullstack',
              'Founder & CEO da UnityMoz',
            ]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </div>
        <h1 className="fw-bold" style={{ color: '#e10600', minHeight: 48 }}>
          <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>
            Ivan Eusébio
          </span>
        </h1>
        <h2 className="mb-3">
          <span style={{ color: '#e10600', fontWeight: 600 }}>Dev Jr. Fullstack</span> &nbsp;| Founder &amp; CEO da UnityMoz
        </h2>
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