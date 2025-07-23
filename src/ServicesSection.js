import React from 'react';
import { motion } from 'framer-motion';

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

/**
 * ServicesSection: Serviços oferecidos pela UnityMoz
 * Cada serviço exibe ícone, título e descrição.
 * Inclui animação de fade-in nos cards com Framer Motion.
 */
function ServicesSection() {
  return (
    <section id="services" className="container py-5" role="region" aria-label="Serviços oferecidos pela UnityMoz">
      <h3 className="mb-4 fw-bold" style={{ color: '#e10600' }}>Serviços</h3>
      <div className="row g-4">
        {services.map((service, idx) => (
          <motion.div
            className="col-md-6 col-lg-3"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.04, boxShadow: '0 10px 32px rgba(225,6,0,0.13)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="card h-100 text-center border-0 shadow-sm">
              <div className="card-body">
                <i className={`${service.icon} fa-3x mb-3`} style={{ color: '#e10600' }} aria-hidden="true"></i>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection; 