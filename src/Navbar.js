import React, { useEffect, useState, useRef } from 'react';
import logo from './assets/logo.png'; // caminho da tua logo

const sections = [
  { id: 'about', label: 'Sobre' },
  { id: 'projects', label: 'Projetos' },
  { id: 'services', label: 'Serviços' },
  { id: 'contact', label: 'Contacto' },
];

function Navbar({ darkMode, onToggleDark }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (window.innerWidth < 992) setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 70;
      const scrollY = window.scrollY + navbarHeight + 10;
      let current = 'hero';
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            current = sections[i].id;
            break;
          }
        }
      }
      setActiveSection(current);
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuClass = menuOpen ? 'show fade-in' : '';

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white fixed-top py-2${scrolled ? ' shadow-lg' : ' shadow-sm'}`}
      style={{ transition: 'box-shadow 0.3s' }}
      ref={navRef}
    >
      <div className="container">
        {/* ✅ Logo + Brand */}
        <a
          className="navbar-brand d-flex align-items-center fw-bold"
          href="#hero"
          style={{ letterSpacing: 1, color: '#e10600', textDecoration: 'none' }}
        >
          <img
            src={logo}
            alt="UnityMoz Logo"
            style={{
              width: 40,
              height: 40,
              objectFit: 'contain',
              marginRight: 8,
            }}
          />
          Unity<span style={{ color: '#000' }}>Moz</span>
        </a>

        {/* Botão hamburguer */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${menuClass}`} id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {sections.map(({ id, label }) => (
              <li className="nav-item" key={id}>
                <a
                  className={`nav-link${activeSection === id ? ' active fw-bold text-danger' : ''}`}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  style={{ cursor: 'pointer' }}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* WhatsApp */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href="https://wa.me/258842566731"
                className="btn btn-success px-3 fw-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2"></i> WhatsApp
              </a>
            </li>

            {/* Dark mode toggle */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                className="btn btn-outline-danger shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
                onClick={onToggleDark}
              >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
