import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

// Serviços oferecidos
const services = [
  {
    title: 'Desenvolvimento Web & Apps',
    icon: 'fas fa-laptop-code',
    description: 'Sites institucionais, portais, sistemas web e aplicativos mobile com foco em performance e experiência do usuário.',
    features: [
      'Websites Responsivos',
      'Aplicativos iOS e Android',
      'Sistemas Web Personalizados',
      'E-commerce e Marketplace',
      'Dashboards Administrativos'
    ],
    technologies: [
      { name: 'React', color: '#61dafb' },
      { name: 'Node.js', color: '#3c873a' },
      { name: 'React Native', color: '#61dafb' },
      { name: 'MongoDB', color: '#47a248' },
      { name: 'Firebase', color: '#ffca28' }
    ]
  },
  {
    title: 'Marketing Digital',
    icon: 'fas fa-bullhorn',
    description: 'Estratégias completas de presença digital, desde a criação da marca até gestão de redes sociais e campanhas.',
    features: [
      'Gestão de Redes Sociais',
      'Marketing de Conteúdo',
      'SEO e Performance',
      'Email Marketing',
      'Análise de Métricas'
    ],
    technologies: [
      { name: 'Google Analytics', color: '#e37400' },
      { name: 'Meta Ads', color: '#1877f2' },
      { name: 'MailChimp', color: '#ffe01b' },
      { name: 'HubSpot', color: '#ff7a59' },
      { name: 'SEMRush', color: '#ff642d' }
    ]
  },
  {
    title: 'Consultoria Digital',
    icon: 'fas fa-lightbulb',
    description: 'Apoio estratégico em transformação digital, inovação tecnológica e otimização de processos internos.',
    features: [
      'Transformação Digital',
      'Automação de Processos',
      'Análise de Dados',
      'Cloud Computing',
      'Segurança Digital'
    ],
    technologies: [
      { name: 'Power BI', color: '#f2c811' },
      { name: 'AWS', color: '#ff9900' },
      { name: 'Azure', color: '#0078d4' },
      { name: 'Python', color: '#3776ab' },
      { name: 'Tableau', color: '#e97627' }
    ]
  },
  {
    title: 'Design & UX/UI',
    icon: 'fas fa-paint-brush',
    description: 'Design moderno e funcional para interfaces digitais, com foco na experiência do usuário e conversão.',
    features: [
      'Interface de Usuário (UI)',
      'Experiência do Usuário (UX)',
      'Design Responsivo',
      'Prototipagem',
      'Design System'
    ],
    technologies: [
      { name: 'Figma', color: '#f24e1e' },
      { name: 'Adobe XD', color: '#ff61f6' },
      { name: 'Sketch', color: '#f7b500' },
      { name: 'InVision', color: '#ff3366' },
      { name: 'Zeplin', color: '#fdbd39' }
    ]
  },
];

// Planos e Pacotes
const plans = [
  {
    name: 'Starter',
    price: 'Sob Consulta',
    ideal: 'Ideal para pequenos negócios',
    features: [
      'Website Institucional',
      'Design Responsivo',
      'Domínio Personalizado',
      'Hospedagem Cloud',
      'Email Profissional',
      'Integração WhatsApp',
      '3 meses de suporte'
    ]
  },
  {
    name: 'Business',
    price: 'Sob Consulta',
    ideal: 'Para empresas em crescimento',
    features: [
      'Tudo do Starter +',
      'Sistema Administrativo',
      'Blog/Notícias',
      'SEO Otimizado',
      'Gestão de 2 Redes Sociais',
      'Relatórios Mensais',
      '6 meses de suporte'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Sob Consulta',
    ideal: 'Soluções corporativas completas',
    features: [
      'Tudo do Business +',
      'Sistema ERP/CRM',
      'App Mobile',
      'Marketing Digital Completo',
      'Automação de Processos',
      'Consultoria Estratégica',
      '12 meses de suporte'
    ]
  }
];

// Removido código das setas do carrossel que não são mais necessárias

function ServicesSection() {
  return (
    <section id="services" className="container py-5" aria-label="Serviços e planos da UnityMoz">
      {/* Terminal simulado */}
      <div style={{
        background: '#181c20', color: '#e5e5e5', borderRadius: 10, padding: '16px 20px', marginBottom: 28, fontFamily: 'monospace', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', maxWidth: 480, margin: '0 auto 28px auto'
      }}>
        <span style={{ color: '#00ff90' }}>$</span> <Typewriter
          words={[
            'npm run servicos',
            'Carregando serviços e planos... ✔',
            'Conheça o que oferecemos:',
          ]}
          loop={0}
          cursor
          cursorStyle='█'
          typeSpeed={55}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>

      {/* Serviços */}
      <h3 className="mb-5 fw-bold" style={{ color: '#e10600' }}>Nossos Serviços</h3>
      <div className="row g-4">
        {services.map((service, idx) => (
          <div className="col-md-6" key={idx}>
            <motion.div
              className="card h-100 border-0 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: 16,
                background: '#23272e',
                color: '#fff',
                overflow: 'hidden'
              }}
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 p-3 rounded-circle" style={{ background: 'rgba(225,6,0,0.1)' }}>
                    <i className={`${service.icon} fa-2x`} style={{ color: '#e10600' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="card-title fw-bold mb-2" style={{ color: '#ff4d4d' }}>{service.title}</h4>
                    <p className="card-text mb-0">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h6 className="fw-bold mb-3" style={{ color: '#ff4d4d' }}>Recursos:</h6>
                  <div className="row g-2">
                    {service.features.map((feature, fidx) => (
                      <div className="col-6" key={fidx}>
                        <div className="d-flex align-items-center">
                          <i className="fas fa-check me-2" style={{ color: '#ff4d4d', fontSize: '0.8rem' }}></i>
                          <span style={{ fontSize: '0.9rem' }}>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tecnologias */}
                {service.technologies && (
                  <div className="mt-4">
                    <h6 className="fw-bold mb-3" style={{ color: '#ff4d4d' }}>Tecnologias:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {service.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="badge"
                          style={{ 
                            background: 'rgba(255,255,255,0.1)', 
                            color: tech.color,
                            fontSize: '0.8rem',
                            padding: '6px 10px',
                            fontWeight: 500
                          }}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Planos */}
      <h3 className="mt-5 mb-4 fw-bold" style={{ color: '#e10600' }}>Nossos Pacotes</h3>
      <div className="row g-4">
        {plans.map((plan, idx) => (
          <div className="col-md-4" key={idx}>
            <motion.div 
              className="card h-100 border-0 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ translateY: -10 }}
              style={{ 
                borderRadius: 16,
                background: '#23272e',
                color: '#fff',
                overflow: 'hidden'
              }}
            >
              <div className="card-body p-4">
                <h4 className="fw-bold mb-2" style={{ color: '#ff4d4d' }}>{plan.name}</h4>
                <p className="text-muted mb-1">{plan.ideal}</p>
                <p className="fw-bold mb-4" style={{ color: '#ff4d4d', fontSize: '1.2rem' }}>{plan.price}</p>
                
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="mb-3 d-flex align-items-start">
                      <i className="fas fa-check-circle me-2 mt-1" style={{ color: '#ff4d4d' }}></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="btn btn-danger w-100 py-2 fw-semibold"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Solicitar Proposta
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
