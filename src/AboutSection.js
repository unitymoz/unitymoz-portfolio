import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * AboutSection: Seção sobre Ivan Eusébio
 * Destaca formação em Engenharia Informática e Telecomunicações e visão empreendedora.
 * Inclui animação de fade-in com Framer Motion.
 */
function AboutSection() {
  return (
    <motion.section
      id="about"
      className="container py-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      role="region"
      aria-label="Sobre Ivan Eusébio"
    >
      {/* Efeito de digitação tipo comentário de código */}
      <div style={{ fontFamily: 'monospace', color: '#888', fontSize: 18, marginBottom: 10, minHeight: 28 }}>
        <Typewriter
          words={['// Desenvolvedor apaixonado por código, inovação e impacto social']}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </div>
      {/* Bloco de código com destaque de sintaxe */}
      <div style={{ maxWidth: 520, margin: '0 auto 18px auto', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
        <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ fontSize: 15, margin: 0, background: '#23272e' }}>
{`function criarImpacto(tech, comunidade) {
  if (tech && comunidade) {
    return 'Inovação com propósito!';
  }
  return 'Continue aprendendo e compartilhando!';
}`}
        </SyntaxHighlighter>
      </div>
      <h3 className="mb-3 fw-bold" style={{ color: '#e10600' }}>Sobre Mim</h3>
      <p className="fs-5 mb-2">
      Olá! Sou o Ivan Eusébio, estudante de <b>Engenharia Informática e de Telecomunicações</b>, fundador da startup <b>UnityMoz</b>, uma iniciativa dedicada a impulsionar a inovação tecnológica com impacto social em Moçambique.
      </p>
      <p className="fs-5 mb-2">
      Apaixonado por <b>educação, cultura e tecnologia</b>, desenvolvi projetos que combinam <b>gamificação, design intuitivo</b> e <b>acessibilidade</b>, sempre com foco no desenvolvimento sustentável. Acredito que a tecnologia deve servir como ponte para inclusão e transformação, especialmente em contextos desafiadores.
      </p>
      <p className="fs-5 mb-2">
      Durante a minha jornada, adquiri competências sólidas em <b>desenvolvimento web e mobile (React, React Native, Firebase, Supabase), gestão de produtos digitais e design centrado no utilizador</b>. Tenho também um olhar empreendedor, com forte interesse em criar soluções alinhadas aos <b>Objetivos de Desenvolvimento Sustentável (ODS), principalmente o ODS 4: Educação de Qualidade e ODS 13: Ação Climática</b>.
      </p>
    </motion.section>
  );
}

export default AboutSection; 