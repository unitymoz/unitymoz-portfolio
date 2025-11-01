import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * AboutSection: Seção institucional da UnityMoz
 * Destaca visão, missão e propósito da startup de tecnologia.
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
      aria-label="Sobre a UnityMoz"
    >
      {/* Efeito de digitação tipo comentário de código */}
      {/* Terminal com Missão */}
      <div style={{ fontFamily: 'monospace', color: '#888', fontSize: 18, marginBottom: 10, minHeight: 28 }}>
        <Typewriter
          words={[
            '// Código fonte da nossa missão:',
            '// Transformando o cenário digital moçambicano 🚀'
          ]}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={50}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </div>

      {/* Código da Missão */}
      <div style={{ maxWidth: 720, margin: '0 auto 20px auto', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
        <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ fontSize: 15, margin: 0, background: '#23272e' }}>
{`class UnityMoz {
  constructor() {
    this.missao = "Desenvolver soluções tecnológicas inovadoras";
    this.visao = "Ser referência em transformação digital em Moçambique";
    this.valores = ["Inovação", "Excelência", "Impacto Social"];
  }

  transformarMercado(desafios) {
    return desafios.map(desafio => 
      this.criarSolucaoInovadora(desafio)
    );
  }
}`}
        </SyntaxHighlighter>
      </div>

      <h3 className="mb-4 fw-bold" style={{ color: '#e10600' }}>Nossa História</h3>
      
      <div className="row g-4">
        <div className="col-md-6">
          <h4 className="fw-bold mb-3">Missão</h4>
          <p className="fs-5 mb-4">
            Desenvolver <b>soluções tecnológicas inovadoras</b> que impulsionam a transformação digital de empresas e instituições em Moçambique, contribuindo para o crescimento econômico e social do país.
          </p>
          
          <h4 className="fw-bold mb-3">Visão</h4>
          <p className="fs-5 mb-4">
            Ser reconhecida como a principal <b>referência em inovação digital</b> em Moçambique, criando um ecossistema tecnológico que inspire e capacite a próxima geração de empreendedores e profissionais de tecnologia.
          </p>
        </div>
        
        <div className="col-md-6">
          <h4 className="fw-bold mb-3">Valores</h4>
          <ul className="fs-5 list-unstyled">
            <li className="mb-3">
              <i className="fas fa-lightbulb me-2" style={{ color: '#e10600' }}></i>
              <b>Inovação:</b> Buscamos constantemente novas formas de resolver desafios através da tecnologia
            </li>
            <li className="mb-3">
              <i className="fas fa-star me-2" style={{ color: '#e10600' }}></i>
              <b>Excelência:</b> Comprometidos com a qualidade e resultados excepcionais
            </li>
            <li className="mb-3">
              <i className="fas fa-hands-helping me-2" style={{ color: '#e10600' }}></i>
              <b>Impacto Social:</b> Desenvolvemos soluções que transformam positivamente a sociedade
            </li>
            <li className="mb-3">
              <i className="fas fa-users me-2" style={{ color: '#e10600' }}></i>
              <b>Colaboração:</b> Acreditamos no poder do trabalho em equipe e parcerias estratégicas
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
