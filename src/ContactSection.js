import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ContactSection: Seção de contacto com formulário, WhatsApp e redes sociais.
 * Inclui animação de fade-in com Framer Motion.
 */
function ContactSection() {
  // Estado do formulário
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validação simples dos campos
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Por favor, preencha seu nome.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Digite um e-mail válido.';
    if (!form.message.trim()) newErrors.message = 'Digite sua mensagem.';
    return newErrors;
  };

  // Manipula mudanças nos campos
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // Simula envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSubmitted(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    }, 1200);
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