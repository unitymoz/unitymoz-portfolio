import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

// Cases de sucesso
const projects = [
  {
    name: 'Draiva - Escola de Condução Digital',
    icon: 'fas fa-car',
    description: 'Plataforma de e-learning gamificada que revolucionou o processo de aprendizagem para candidatos à carta de condução em Moçambique.',
    stack: 'React, Node.js, Firebase, Supabase',
    link: 'https://unitymoz-draiva.web.app',
    results: [
      '2000+ usuários ativos',
      '85% taxa de aprovação',
      '4.8/5 avaliação média',
      'Presente em 5 províncias'
    ],
    testimonial: {
      text: 'A plataforma Draiva transformou completamente nossa escola de condução, aumentando a eficiência e satisfação dos alunos.',
      author: 'José Manuel',
      role: 'Diretor da Escola de Condução Segura'
    }
  },
  {
    name: 'Karingana',
    icon: 'fas fa-book-open',
    description: 'Trivia educacional sobre cultura moçambicana, promovendo o aprendizado de forma divertida. Alinha-se ao ODS 4 e está a evoluir para uma plataforma educativa com conteúdos sobre história, geografia e línguas locais. Foi apresentado em concursos criativos e hackathons.',
    stack: 'React, Node.js, Firebase, Supabase',
    link: 'https://karingana.net',
  },
  {
    name: 'Djika Djika',
    icon: 'fas fa-dice',
    description: 'App de sorteios personalizados, ideal para festas e reuniões informais. Desenvolvido com Expo (React Native), oferece sorteio com modo "roleta russa", temas claro/escuro e experiência fluida.',
    stack: 'React Native, Expo',
    link: '#',
  },
  {
    name: 'Mercado Novo',
    icon: 'fas fa-store',
    description: 'Projeto em desenvolvimento: um marketplace mobile onde qualquer pessoa pode criar sua loja virtual. O app conecta compradores e vendedores sem intermediar as transações, focando apenas na exposição com planos pagos (Básico, Premium, VIP). Backend com Supabase.',
    stack: 'React Native, Expo, Supabase',
    link: '#',
  },
  {
    name: 'Sistema de Gestão de Inscrições',
    icon: 'fas fa-graduation-cap',
    description: 'Plataforma web para cursos de formação, com dashboards para alunos, formadores, finanças e administração. Inclui funcionalidades como geração de certificados, pagamentos por carteiras móveis, relatórios estatísticos e interação com formadores.',
    stack: 'React, Node.js, MongoDB, JavaScript, etc',
    link: '#',
  },
  {
    name: 'Recicla+MZ',
    icon: 'fas fa-recycle',
    description: 'Uma aplicação conceptual que incentiva a reciclagem e o comportamento sustentável nas comunidades urbanas e suburbanas de Moçambique. Permite aos usuários localizar pontos de recolha, receber dicas práticas e registar suas ações sustentáveis. Visa promover hábitos conscientes e combater os impactos das mudanças climáticas.',
    stack: 'React Native, Expo, Supabase',
    link: '#',
  },
  {
    name: 'MudaAki',
    icon: 'fas fa-seedling',
    description: 'Plataforma de microações sociais locais, que encoraja os cidadãos a fazerem pequenas mudanças com grande impacto coletivo. Ex: plantar uma árvore, limpar uma rua ou ensinar uma criança. O app regista, classifica e valoriza essas ações com recompensas simbólicas e visibilidade comunitária. Inspirado nos ODS e ideal para mobilização jovem e comunitária.',
    stack: 'React Native, Expo, Supabase',
    link: '#',
  },
  {
    name: "Raiz",
    icon: 'fas fa-tree',
    description: "Plataforma web para registrar e organizar experiências diárias de forma divertida e intuitiva. Crie repositórios de memórias, faça commits diários e capture seus sentimentos.",
    stack: "React, Node.js, Firebase, Supabase, CSS3",
    link: "https://raiz-unitymoz.vercel.app",
  },
];




/**
 * ProjectsSection: Lista de projetos da UnityMoz
 * Cada projeto exibe ícone, nome, descrição, stack e link.
 * Inclui animação de fade-in nos cards com Framer Motion.
 */
function ProjectsSection() {
  return (
    <section id="projects" className="container py-5">
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
            'npm run cases',
            'Carregando histórias de sucesso... ✔',
            'Cases UnityMoz:',
          ]}
          loop={0}
          cursor
          cursorStyle='█'
          typeSpeed={55}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>

      <h3 className="mb-4 text-center fw-bold" style={{ color: '#e10600' }}>Cases de Sucesso</h3>
      <p className="text-center mb-5 lead">
        Histórias reais de transformação digital que ajudamos a construir
      </p>
      <h3 className="mb-4 fw-bold" style={{ color: '#e10600' }}>Projetos</h3>
      {/* Carrossel de projetos */}
      <div className="row g-4">
        {projects.map((project, idx) => (
          <motion.div
            className="col-md-6"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="card h-100 border-0 shadow-sm" style={{ background: '#23272e', borderRadius: 16, overflow: 'hidden' }}>
              <div className="card-body p-4">
                {/* Cabeçalho do Case */}
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3 p-3 rounded-circle" style={{ background: 'rgba(225,6,0,0.1)' }}>
                    <i className={`${project.icon} fa-2x`} style={{ color: '#e10600' }}></i>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h4 className="card-title fw-bold mb-0" style={{ color: '#ff4d4d' }}>{project.name}</h4>
                      {project.name === 'Djika Djika' && (
                        <span className="badge bg-warning text-dark" style={{ fontSize: '0.7rem' }}>Brevemente</span>
                      )}
                      {project.name !== 'Draiva' && project.name !== 'Karingana' && project.name !== 'Djika Djika' && (
                        <span className="badge bg-info text-dark" style={{ fontSize: '0.7rem' }}>Em desenvolvimento</span>
                      )}
                    </div>
                    <p className="card-text text-light mb-0">{project.description}</p>
                  </div>
                </div>

                {/* Resultados */}
                {project.results && (
                  <div className="mb-4">
                    <h6 className="fw-bold mb-3" style={{ color: '#ff4d4d' }}>Resultados:</h6>
                    <div className="row g-2">
                      {project.results.map((result, ridx) => (
                        <div className="col-6" key={ridx}>
                          <div className="d-flex align-items-center text-light">
                            <i className="fas fa-chart-line me-2" style={{ color: '#ff4d4d', fontSize: '0.8rem' }}></i>
                            <span style={{ fontSize: '0.9rem' }}>{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tecnologias */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3" style={{ color: '#ff4d4d' }}>Stack:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {project.stack.split(',').map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="badge"
                        style={{ background: 'rgba(225,6,0,0.1)', color: '#ff4d4d', fontSize: '0.8rem' }}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Depoimento */}
                {project.testimonial && (
                  <div className="mb-4 p-3 rounded" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <p className="text-light fst-italic mb-2" style={{ fontSize: '0.9rem' }}>
                      "{project.testimonial.text}"
                    </p>
                    <small className="text-light">
                      <strong>{project.testimonial.author}</strong>
                      <span className="text-muted"> • {project.testimonial.role}</span>
                    </small>
                  </div>
                )}

                {/* Link para o projeto */}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    className="btn btn-outline-danger w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>
                    Ver Projeto
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}export default ProjectsSection;