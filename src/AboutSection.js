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
      {/* Terminal com Missão */}
      <div style={{ 
        background: '#181c20', 
        color: '#e5e5e5', 
        borderRadius: 10, 
        padding: '16px 20px', 
        marginBottom: 28, 
        fontFamily: 'monospace', 
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)', 
        maxWidth: 480, 
        margin: '0 auto 28px auto',
        fontSize: '14px'
      }}>
        <span style={{ color: '#00ff90' }}>$</span> <Typewriter
          words={[
            'npm run sobre',
            'Carregando informações... ✔',
            'Nossa história:',
          ]}
          loop={0}
          cursor
          cursorStyle='█'
          typeSpeed={55}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>

      {/* Código da Missão */}
      <div style={{ 
        width: '100%',
        maxWidth: 720, 
        margin: '0 auto 20px auto', 
        borderRadius: 10, 
        overflow: 'hidden', 
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
      }}>
        <SyntaxHighlighter 
          language="javascript" 
          style={atomDark} 
          customStyle={{ 
            fontSize: '14px', 
            margin: 0, 
            background: '#23272e',
            padding: '1rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineNumberStyle={{ color: '#666', paddingRight: '1em' }}
        >
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
        <div className="col-12 col-md-6">
          <div className="p-3 h-100" style={{ background: 'rgba(225,6,0,0.03)', borderRadius: '12px' }}>
            <h4 className="fw-bold mb-3" style={{ color: '#e10600' }}>Missão</h4>
            <p className="fs-6 mb-4">
              Desenvolver <b>soluções tecnológicas inovadoras</b> que impulsionam a transformação digital de empresas e instituições em Moçambique, contribuindo para o crescimento econômico e social do país.
            </p>
            
            <h4 className="fw-bold mb-3" style={{ color: '#e10600' }}>Visão</h4>
            <p className="fs-6 mb-4">
              Ser reconhecida como a principal <b>referência em inovação digital</b> em Moçambique, criando um ecossistema tecnológico que inspire e capacite a próxima geração de empreendedores e profissionais de tecnologia.
            </p>
          </div>
        </div>
        
        <div className="col-12 col-md-6">
          <div className="p-3 h-100" style={{ background: 'rgba(225,6,0,0.03)', borderRadius: '12px' }}>
            <h4 className="fw-bold mb-3" style={{ color: '#e10600' }}>Valores</h4>
            <ul className="list-unstyled mb-0">
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-lightbulb me-2 mt-1" style={{ color: '#e10600' }}></i>
                <div>
                  <b>Inovação</b>
                  <p className="mb-0 fs-6">Buscamos constantemente novas formas de resolver desafios através da tecnologia</p>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-star me-2 mt-1" style={{ color: '#e10600' }}></i>
                <div>
                  <b>Excelência</b>
                  <p className="mb-0 fs-6">Comprometidos com a qualidade e resultados excepcionais</p>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="fas fa-hands-helping me-2 mt-1" style={{ color: '#e10600' }}></i>
                <div>
                  <b>Impacto Social</b>
                  <p className="mb-0 fs-6">Desenvolvemos soluções que transformam positivamente a sociedade</p>
                </div>
              </li>
              <li className="mb-0 d-flex align-items-start">
                <i className="fas fa-users me-2 mt-1" style={{ color: '#e10600' }}></i>
                <div>
                  <b>Colaboração</b>
                  <p className="mb-0 fs-6">Acreditamos no poder do trabalho em equipe e parcerias estratégicas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
