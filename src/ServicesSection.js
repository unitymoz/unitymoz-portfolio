import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

// Lista de serviços oferecidos pela UnityMoz
const services = [
  {
    title: 'Desenvolvimento Web',
    icon: 'fas fa-laptop-code',
    description: 'Criação de websites modernos, responsivos e personalizados para empresas e organizações.',
  },
  {
    title: 'Desenvolvimento Mobile',
    icon: 'fas fa-mobile-alt',
    description: 'Aplicativos móveis inovadores para Android e iOS, focados na experiência do usuário.',
  },
  {
    title: 'Consultoria Tecnológica',
    icon: 'fas fa-lightbulb',
    description: 'Apoio estratégico em transformação digital, inovação e adoção de novas tecnologias.',
  },
  {
    title: 'Soluções Educacionais',
    icon: 'fas fa-graduation-cap',
    description: 'Plataformas e ferramentas para educação digital, capacitação e gestão escolar.',
  },
];

// Mini-snippets para cada serviço
const serviceSnippets = [
  `// Deploy de site moderno\nconst deploy = () => console.log('Site publicado!');`,
  `// App mobile\nfunction buildApp() {\n  return 'Experiência nativa!';\n}`,
  `// Consultoria\nconst consult = (empresa) => empresa.inovar();`,
  `// Plataforma educacional\nlet alunos = ['Ana', 'João'];\nfor (let a of alunos) {\n  aprender(a);\n}`
];

// Setas customizadas estilo terminal
const ArrowLeft = (props) => (
  <button {...props} style={{ ...props.style, background: 'none', border: 'none', position: 'absolute', left: -36, top: '45%', zIndex: 2, fontSize: 28, color: '#ff4d4d', cursor: 'pointer', fontFamily: 'monospace', transition: 'color 0.2s' }} aria-label="Serviço anterior">
    <FaChevronLeft />
  </button>
);
const ArrowRight = (props) => (
  <button {...props} style={{ ...props.style, background: 'none', border: 'none', position: 'absolute', right: -36, top: '45%', zIndex: 2, fontSize: 28, color: '#ff4d4d', cursor: 'pointer', fontFamily: 'monospace', transition: 'color 0.2s' }} aria-label="Próximo serviço">
    <FaChevronRight />
  </button>
);

/**
 * ServicesSection: Serviços oferecidos pela UnityMoz
 * Cada serviço exibe ícone, título e descrição.
 * Inclui animação de fade-in nos cards com Framer Motion.
 */
function ServicesSection() {
  return (
    <section id="services" className="container py-5" role="region" aria-label="Serviços oferecidos pela UnityMoz">
      {/* Terminal simulado */}
      <div style={{
        background: '#181c20', color: '#e5e5e5', borderRadius: 10, padding: '16px 20px', marginBottom: 28, fontFamily: 'monospace', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', maxWidth: 480, margin: '0 auto 28px auto'
      }}>
        <span style={{ color: '#00ff90' }}>$</span> <Typewriter
          words={[
            'npm run servicos',
            'Carregando serviços... ✔',
            'Serviços disponíveis:',
          ]}
          loop={0}
          cursor
          cursorStyle='█'
          typeSpeed={55}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>
      <h3 className="mb-4 fw-bold" style={{ color: '#e10600' }}>Serviços</h3>
      {/* Carrossel de serviços */}
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={4200}
        pauseOnHover={true}
        nextArrow={<ArrowRight />}
        prevArrow={<ArrowLeft />}
        appendDots={dots => (
          <div style={{ marginTop: 18 }}>
            <ul style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: 0 }}>
              {dots.map((dot, idx) => (
                <li key={idx} style={{ listStyle: 'none', fontFamily: 'monospace', fontSize: 18, color: '#888', minWidth: 18 }}>
                  {dot}
                </li>
              ))}
            </ul>
          </div>
        )}
        customPaging={i => (
          <span style={{ color: '#ff4d4d', fontWeight: 700, fontFamily: 'monospace', fontSize: 18 }}>
            {`●`}
          </span>
        )}
        responsive={[]}
        style={{ maxWidth: 600, margin: '0 auto' }}
        aria-label="Carrossel de serviços"
      >
        {services.map((service, idx) => (
          <div key={idx} style={{ padding: 12, position: 'relative' }}>
            {/* Separador de código entre slides */}
            {idx > 0 && (
              <div style={{
                position: 'absolute',
                left: -32,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#888',
                fontFamily: 'monospace',
                fontSize: 16,
                zIndex: 2
              }}>
                {'// --- Serviço seguinte ---'}
              </div>
            )}
            <div className="card h-100 text-center border-0 shadow-sm service-card-dev"
              style={{ background: '#23272e', color: '#fff', fontFamily: 'monospace', minHeight: 340, transition: 'background 0.3s' }}>
              <div className="card-body">
                <i className={`${service.icon} fa-3x mb-3`} style={{ color: '#e10600', transition: 'filter 0.3s' }} aria-hidden="true"></i>
                <h5 className="card-title fw-bold" style={{ color: '#ff4d4d' }}>{service.title}</h5>
                <p className="card-text">{service.description}</p>
                {/* Mini-snippet de código */}
                <div style={{ marginTop: 12, borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 6px rgba(0,0,0,0.10)' }}>
                  <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ fontSize: 13, margin: 0, background: '#181c20' }}>
                    {serviceSnippets[idx]}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ServicesSection; 