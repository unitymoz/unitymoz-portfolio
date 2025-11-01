import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiFirebase,
  SiTailwindcss,
  SiWhatsapp,
  SiInstagram,
  SiLinkedin
} from 'react-icons/si';

/**
 * HeroSection: Seção principal do website institucional da UnityMoz
 * Foco em presença digital, inovação tecnológica e impacto local.
 */
function HeroSection() {
  // Scroll suave até à seção de contato
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.section
      id="hero"
      className="min-vh-100 d-flex flex-column flex-md-row justify-content-center align-items-center bg-white text-center text-md-start gap-4 container position-relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      role="region"
      aria-label="UnityMoz - Inovação Digital em Moçambique"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      {/* Fundo com ícones de tecnologia */}
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
        <SiReact style={{ position: 'absolute', top: '15%', left: '5%', fontSize: 80, color: '#61dafb', opacity: 0.12 }} />
        <SiNodedotjs style={{ position: 'absolute', top: '65%', left: '15%', fontSize: 70, color: '#68a063', opacity: 0.12 }} />
        <SiSupabase style={{ position: 'absolute', top: '30%', right: '10%', fontSize: 70, color: '#3ecf8e', opacity: 0.12 }} />
        <SiFirebase style={{ position: 'absolute', bottom: '10%', right: '15%', fontSize: 70, color: '#ffca28', opacity: 0.12 }} />
        <SiTailwindcss style={{ position: 'absolute', top: '55%', right: '40%', fontSize: 60, color: '#38bdf8', opacity: 0.12 }} />
      </div>

      {/* Logotipo */}
      <motion.img
        src={process.env.PUBLIC_URL + '/logo.png'}
        alt="Logotipo da UnityMoz"
        className="shadow mb-4 mb-md-0 bg-white p-3"
        style={{
          width: 260,
          height: 260,
          objectFit: 'contain',
          borderRadius: 24,
          border: '3px solid #e10600',
        }}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
      />

      {/* Conteúdo institucional */}
      <motion.div
        className="d-flex flex-column align-items-center align-items-md-start justify-content-center flex-1"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 20,
            color: '#212529',
            marginBottom: 12,
            minHeight: 32,
            textAlign: 'center',
          }}
        >
          <Typewriter
            words={[
              '// Transformando ideias em inovação digital 🚀',
              '// Soluções tecnológicas sob medida 💡',
              '// Impulsionando negócios em Moçambique 🇲🇿',
              '// Desenvolvendo o futuro digital hoje 💻'
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="fw-bold" style={{ color: '#e10600', fontSize: '2.8rem', marginBottom: '1rem' }}>
            Unity<span style={{ color: '#212529' }}>Moz</span>
          </h1>

          <h2 className="mb-4 fw-semibold" style={{ maxWidth: 640, fontSize: '1.8rem', lineHeight: 1.4 }}>
            Tecnologia e Inovação para
            <span className="d-block" style={{ color: '#e10600' }}>Transformar o Futuro Digital</span>
          </h2>

          <p className="lead mx-auto mx-md-0" style={{ maxWidth: 580, fontSize: '1.2rem', lineHeight: 1.6 }}>
            Somos uma <strong>startup tecnológica</strong> focada em criar soluções digitais inovadoras que impulsionam o crescimento de <strong>empresas e instituições em Moçambique</strong>. Da <strong>concepção à implementação</strong>, transformamos desafios em oportunidades através da tecnologia.
          </p>
        </motion.div>

        {/* CTAs */}
        <div className="d-flex gap-3 mt-4">
          <motion.button
            className="btn btn-danger btn-lg px-4 py-2 fw-semibold shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            aria-label="Solicitar uma demonstração"
          >
            <i className="fas fa-rocket me-2" aria-hidden="true"></i>
            Agendar Demo
          </motion.button>

          <motion.a
            href="#services"
            className="btn btn-outline-danger btn-lg px-4 py-2 fw-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Ver nossos serviços"
          >
            <i className="fas fa-chevron-right me-2" aria-hidden="true"></i>
            Conhecer Serviços
          </motion.a>
        </div>

        {/* Redes sociais */}
        <div className="d-flex gap-3 mt-4">
          <a href="https://wa.me/258842566731" target="_blank" rel="noreferrer" aria-label="WhatsApp UnityMoz">
            <SiWhatsapp size={28} color="#25D366" />
          </a>
          <a href="https://instagram.com/unitymoz" target="_blank" rel="noreferrer" aria-label="Instagram UnityMoz">
            <SiInstagram size={28} color="#E4405F" />
          </a>
          <a href="https://linkedin.com/in/ivan-eusébio-546204339" target="_blank" rel="noreferrer" aria-label="LinkedIn UnityMoz">
            <SiLinkedin size={28} color="#0077B5" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;
