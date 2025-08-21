import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

/**
 * Footer: rodapé moderno, responsivo e acessível com slogan, contatos e animação.
 */
function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { icon: 'fas fa-envelope', url: 'mailto:ivan.eusebio13@gmail.com', color: 'danger', label: 'E-mail' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/258842566731', color: 'success', label: 'WhatsApp' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/ivan-eusébio-546204339/', color: 'danger', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/unitymoz', color: 'danger', label: 'GitHub' },
    { icon: 'fab fa-twitter', url: 'https://x.com/IvanEusbio3', color: 'danger', label: 'Twitter' },
  ];
  return (
    <motion.footer
      className="bg-light border-top mt-5 pt-4 pb-2"
      role="contentinfo"
      aria-label="Rodapé institucional"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container">
        {/* Stacks/Ferramentas de Dev */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-2" aria-label="Stacks e ferramentas">
          <FaReact size={28} color="#61dafb" title="React" />
          <FaNodeJs size={28} color="#3c873a" title="Node.js" />
          <FaJs size={28} color="#f7df1e" title="JavaScript" />
          <FaHtml5 size={28} color="#e34c26" title="HTML5" />
          <FaCss3Alt size={28} color="#1572b6" title="CSS3" />
          <SiFirebase size={28} color="#ffca28" title="Firebase" />
          <FaGitAlt size={28} color="#f34f29" title="Git" />
        </div>
        <div className="row align-items-center gy-3">
          {/* Missão/Slogan */}
          <div className="col-12 col-md-4 text-center text-md-start small text-muted">
            <div className="fw-semibold mb-1" style={{ color: '#e10600' }}>
              Inovação, Educação e Impacto Social
            </div>
            <div>
              &copy; {year} UnityMoz. Todos os direitos reservados.
            </div>
          </div>
          {/* Links rápidos */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center">
            <nav aria-label="Links rápidos do rodapé">
              <ul className="list-inline mb-2 mb-md-0">
                <li className="list-inline-item"><a href="#hero" className="text-danger text-decoration-none footer-link">Início</a></li>
                <li className="list-inline-item"><a href="#about" className="text-danger text-decoration-none footer-link">Sobre</a></li>
                <li className="list-inline-item"><a href="#projects" className="text-danger text-decoration-none footer-link">Projetos</a></li>
                <li className="list-inline-item"><a href="#services" className="text-danger text-decoration-none footer-link">Serviços</a></li>
                <li className="list-inline-item"><a href="#contact" className="text-danger text-decoration-none footer-link">Contacto</a></li>
              </ul>
            </nav>
            <hr className="d-md-none my-2 w-100" style={{ borderColor: '#e10600', opacity: 0.2 }} />
          </div>
          {/* Contatos e redes sociais */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-end gap-2">
            <div className="d-flex gap-3 mb-1">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  className={`text-${social.color} fs-5 footer-link`}
                  aria-label={social.label}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  tabIndex={0}
                  whileHover={{ scale: 1.18, rotate: -8 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ display: 'inline-block' }}
                >
                  <i className={social.icon} aria-hidden="true"></i>
                </motion.a>
              ))}
            </div>
            <span className="small text-muted">contato@unitymoz.co.mz</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer; 