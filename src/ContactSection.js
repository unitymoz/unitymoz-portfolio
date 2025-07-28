import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Adicionado para integração com EmailJS
import { Typewriter } from 'react-simple-typewriter';

/**
 * ContactSection: Seção de contacto com formulário, WhatsApp e redes sociais.
 * Inclui animação de fade-in com Framer Motion.
 */
function ContactSection() {
  // Estado do formulário
  const [form, setForm] = useState({ name: '', email: '', title: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validação simples dos campos
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Por favor, preencha seu nome.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Digite um e-mail válido.';
    if (!form.title.trim()) newErrors.title = 'Digite o assunto.';
    if (!form.message.trim()) newErrors.message = 'Digite sua mensagem.';
    return newErrors;
  };

  // Manipula mudanças nos campos
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // Simula envio do formulário
  // Substituir função handleSubmit para envio real via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSubmitted(false);
      return;
    }
    setLoading(true);
    // Substitua pelos seus dados do EmailJS:
    const SERVICE_ID = 'service_mwg22q8';
    const TEMPLATE_ID = 'template_rwipg2n';
    const PUBLIC_KEY = 'eXzamXW2mPNEJgauZ';
    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setForm({ name: '', email: '', title: '', message: '' });
        setErrors({});
      })
      .catch(() => {
        setLoading(false);
        setErrors({ submit: 'Erro ao enviar. Tente novamente.' });
        setSubmitted(false);
      });
  };

  // WhatsApp e redes sociais
  const whatsappNumber = '258842566731'; // Substitua pelo número real
  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'inkedin.com/in/ivan-eusébio-546204339/' },
    { icon: 'fab fa-github', url: 'https://github.com/unitymoz' },
    { icon: 'fab fa-twitter', url: 'https://x.com/IvanEusbio3' },
  ];

  return (
    <motion.section
      id="contact"
      className="container py-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      role="region"
      aria-label="Formulário de contato e redes sociais"
    >
      {/* Terminal simulado */}
      <div style={{
        background: '#181c20', color: '#e5e5e5', borderRadius: 10, padding: '16px 20px', marginBottom: 28, fontFamily: 'monospace', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', maxWidth: 480, margin: '0 auto 28px auto'
      }}>
        <span style={{ color: '#00ff90' }}>$</span> <Typewriter
          words={[
            'npm run contacto',
            'Iniciando sistema de contacto... ✔',
            'Formulário pronto para envio:',
          ]}
          loop={0}
          cursor
          cursorStyle='█'
          typeSpeed={55}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>
      <h3 className="mb-4 fw-bold" style={{ color: '#e10600' }}>Contacto</h3>
      <div className="row g-4">
        {/* Formulário de contacto */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm" aria-label="Formulário de contato" noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome</label>
              <input
                type="text"
                className={`form-control${errors.name ? ' is-invalid' : ''}`}
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Nome"
                aria-invalid={!!errors.name}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control${errors.email ? ' is-invalid' : ''}`}
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Email"
                aria-invalid={!!errors.email}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Assunto</label>
              <input
                type="text"
                className={`form-control${errors.title ? ' is-invalid' : ''}`}
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Assunto"
                aria-invalid={!!errors.title}
              />
              {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensagem</label>
              <textarea
                className={`form-control${errors.message ? ' is-invalid' : ''}`}
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-label="Mensagem"
                aria-invalid={!!errors.message}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn-danger w-100" aria-label="Enviar mensagem" disabled={loading}>
              {loading ? (
                <span><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...</span>
              ) : (
                'Enviar'
              )}
            </button>
            {/* Exibe erro de envio, se houver */}
            {errors.submit && (
              <div className="alert alert-danger mt-3" role="alert">{errors.submit}</div>
            )}
            {submitted && !loading && (
              <div className="alert alert-success mt-3" role="status">Mensagem enviada com sucesso!</div>
            )}
          </form>
        </div>
        {/* WhatsApp e redes sociais */}
        <div className="col-md-5 d-flex flex-column align-items-center justify-content-center">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="btn btn-success mb-3 w-100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar no WhatsApp"
          >
            <i className="fab fa-whatsapp me-2" aria-hidden="true"></i> Fale no WhatsApp
          </a>
          <div className="d-flex gap-3 mt-2">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-danger fs-3" aria-label={`Acessar ${social.icon.replace('fab fa-', '')}`}>
                <i className={social.icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection; 