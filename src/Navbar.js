import React, { useEffect, useState, useRef } from 'react';

/**
 * Navbar: Barra de navegação moderna e responsiva
 * Inclui links para as seções, botão de WhatsApp, scroll suave, destaque da seção ativa e sombra dinâmica ao rolar.
 */
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

  // Scroll suave ao clicar nos links
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    // Fecha o menu mobile ao clicar
    if (window.innerWidth < 992) setMenuOpen(false);
  };

  // Fecha menu ao clicar fora (mobile)
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Scrollspy aprimorado
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

  // Animação de abertura do menu mobile
  const menuClass = menuOpen ? 'show fade-in' : '';

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white fixed-top py-2${scrolled ? ' shadow-lg' : ' shadow-sm'}`}
      style={{ transition: 'box-shadow 0.3s' }}
      role="navigation"
      aria-label="Navegação principal"
      ref={navRef}
    >
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand fw-bold" href="#hero" style={{ letterSpacing: 1, color: darkMode ? '#fff' : '#e10600' }} aria-label="Ir para o início">
          Unity
          <span style={{ color: darkMode ? '#e10600' : '#e10600', transition: 'color 0.3s' }}>Moz</span>
        </a>
        {/* Botão hamburguer para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={menuOpen}
          aria-label="Abrir menu de navegação"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Links de navegação + toggle dark mode */}
        <div className={`collapse navbar-collapse ${menuClass}`} id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center" role="menubar">
            {sections.map(({ id, label }) => (
              <li className="nav-item" key={id} role="none">
                <a
                  className={`nav-link${activeSection === id ? ' active fw-bold text-danger' : ''}`}
                  href={`#${id}`}
                  onClick={e => handleNavClick(e, id)}
                  style={{ cursor: 'pointer' }}
                  role="menuitem"
                  tabIndex={0}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
            {/* Botão WhatsApp em destaque */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0" role="none">
              <a
                href="https://wa.me/258840000000"
                className="btn btn-success px-3 fw-semibold"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1rem' }}
                aria-label="Conversar no WhatsApp"
                role="menuitem"
                tabIndex={0}
              >
                <i className="fab fa-whatsapp me-2" aria-hidden="true"></i> WhatsApp
              </a>
            </li>
            {/* Toggle Dark/Light Mode */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0" role="none">
              <button
                className="btn btn-outline-danger shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40, background: 'var(--unitymoz-bg)' }}
                onClick={onToggleDark}
                aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
                tabIndex={0}
                type="button"
              >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} style={{ fontSize: 18 }}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 