import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

// Lista de websites desenvolvidos
const websites = [
  {
    name: 'Instituto Politécnico Universo',
    image: '/images/websites/IPUlaptop.png',
    description: 'Website institucional moderno e sistema integrado de pré-inscrição para o Instituto Politécnico Universo.',
    features: [
      'Design Responsivo',
      'Sistema de Pré-inscrição',
      'Painel Administrativo',
      'Gestão de Redes Sociais',
      
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap 5'],
    results: [
      '50+ pré-inscrições processadas',
      '80% mais engajamento',
      '80% mais alcance nas redes',
      'Tempo de resposta reduzido'
    ],
    link: 'https://ipu.ac.mz'
  },
 
];

function WebsitesSection() {
  return (
    <section id="websites" className="container py-5">
      {/* Terminal simulado */}
      <div style={{
        background: '#181c20',
        color: '#e5e5e5',
        borderRadius: 10,
        padding: '16px 20px',
        marginBottom: 28,
        fontFamily: 'monospace',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        maxWidth: 480,
        margin: '0 auto 28px auto'
      }}>
        <span style={{ color: '#00ff90' }}>$</span> <Typewriter
          words={[
            'npm run websites',
            'Carregando portfólio web... ✔',
            'Websites desenvolvidos:',
          ]}
          loop={0}
          cursor
          cursorStyle='█'
          typeSpeed={55}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>

      <h3 className="mb-4 text-center fw-bold" style={{ color: '#e10600' }}>Websites Desenvolvidos</h3>
      <p className="text-center mb-5 lead">
        Presença digital impactante com resultados mensuráveis
      </p>

      <div className="row g-4 justify-content-center">
        {websites.map((website, idx) => (
          <motion.div
            className={`col-md-6 col-lg-4 ${websites.length === 1 ? 'col-lg-6' : ''}`}
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: 16, overflow: 'hidden' }}>
              {/* Imagem do Website */}
              <div className="position-relative">
                <img
                  src={website.image}
                  alt={website.name}
                  className="card-img-top"
                  style={{ height: 200, objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(35,39,46,1) 100%)' 
                }}></div>
              </div>

              <div className="card-body p-4">
                {/* Título e Descrição */}
                <h4 className="card-title fw-bold mb-2" style={{ color: '#ff4d4d' }}>{website.name}</h4>
                <p className="card-text text-light mb-3">{website.description}</p>

                {/* Features */}
                <div className="mb-3">
                  <h6 className="fw-bold mb-2" style={{ color: '#ff4d4d' }}>Funcionalidades:</h6>
                  <div className="row g-2">
                    {website.features.map((feature, fidx) => (
                      <div className="col-6" key={fidx}>
                        <div className="d-flex align-items-center text-light">
                          <i className="fas fa-check me-2" style={{ color: '#ff4d4d', fontSize: '0.8rem' }}></i>
                          <span style={{ fontSize: '0.9rem' }}>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tecnologias */}
                <div className="mb-3">
                  <h6 className="fw-bold mb-2" style={{ color: '#ff4d4d' }}>Stack:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {website.technologies.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="badge"
                        style={{ background: 'rgba(225,6,0,0.1)', color: '#ff4d4d', fontSize: '0.8rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resultados */}
                <div className="mb-3">
                  <h6 className="fw-bold mb-2" style={{ color: '#ff4d4d' }}>Resultados:</h6>
                  <div className="row g-2">
                    {website.results.map((result, ridx) => (
                      <div className="col-6" key={ridx}>
                        <div className="d-flex align-items-center text-light">
                          <i className="fas fa-chart-line me-2" style={{ color: '#ff4d4d', fontSize: '0.8rem' }}></i>
                          <span style={{ fontSize: '0.9rem' }}>{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link para o Website */}
                <a
                  href={website.link}
                  className="btn btn-outline-danger w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt me-2"></i>
                  Visitar Website
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WebsitesSection;
