import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: "fab fa-linkedin-in",
      url: "https://linkedin.com/in/ivan-eusébio-546204339/",
      color: "#0A66C2",
      label: "LinkedIn",
    },
    {
      icon: "fab fa-github",
      url: "https://github.com/unitymoz",
      color: "#181717",
      label: "GitHub",
    },
    {
      icon: "fab fa-whatsapp",
      url: "https://wa.me/258842566731",
      color: "#25D366",
      label: "WhatsApp",
    },
    {
      icon: "fab fa-instagram",
      url: "https://instagram.com/ivan_eusebio",
      color: "#E4405F",
      label: "Instagram",
    },
    {
      icon: "fab fa-x-twitter",
      url: "https://x.com/IvanEusbio3",
      color: "#000000",
      label: "Twitter / X",
    },
  ];

  return (
    <motion.footer
      className="bg-light border-top mt-5 pt-5 pb-3"
      role="contentinfo"
      aria-label="Rodapé institucional"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container text-center text-md-start">
        {/* Logo e slogan */}
        <div className="d-flex flex-column align-items-center mb-4">
          <img
            src="/logo.png"
            alt="Logo UnityMoz"
            style={{ width: 60, height: 60, objectFit: "contain", marginBottom: 8 }}
          />
          <h5 className="fw-bold mb-1" style={{ color: "#e10600", letterSpacing: 1 }}>
            UnityMoz
          </h5>
          <p className="text-muted small mb-0">
            Inovação, Educação e Impacto Social
          </p>
        </div>

        {/* Tecnologias usadas */}
        <div
          className="d-flex justify-content-center align-items-center gap-3 flex-wrap mb-3"
          aria-label="Stacks e ferramentas"
        >
          <FaReact size={26} color="#61dafb" title="React" />
          <FaNodeJs size={26} color="#3c873a" title="Node.js" />
          <FaJs size={26} color="#f7df1e" title="JavaScript" />
          <FaHtml5 size={26} color="#e34c26" title="HTML5" />
          <FaCss3Alt size={26} color="#1572b6" title="CSS3" />
          <SiFirebase size={26} color="#ffca28" title="Firebase" />
          <FaGitAlt size={26} color="#f34f29" title="Git" />
        </div>

        <hr className="my-3" style={{ borderColor: "#e10600", opacity: 0.2 }} />

        {/* Links rápidos e redes sociais */}
        <div className="row align-items-center gy-4">
          {/* Links rápidos */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <ul className="list-inline mb-0 small">
              <li className="list-inline-item me-3">
                <a href="#hero" className="text-danger text-decoration-none">Início</a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#about" className="text-danger text-decoration-none">Sobre</a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#projects" className="text-danger text-decoration-none">Projetos</a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#services" className="text-danger text-decoration-none">Serviços</a>
              </li>
              <li className="list-inline-item">
                <a href="#contact" className="text-danger text-decoration-none">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.15, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
                style={{ color: social.color, fontSize: "1.3rem" }}
              >
                <i className={social.icon} aria-hidden="true"></i>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="text-center mt-4 small text-muted">
          &copy; {year} <strong>UnityMoz</strong>. Todos os direitos reservados.
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
