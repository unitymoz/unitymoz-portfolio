import React from 'react';
import { motion } from 'framer-motion';

// Dados dos projetos com ícones FontAwesome
const projects = [
  {
    name: 'Draiva',
    icon: 'fas fa-car',
    description: 'Uma plataforma gamificada para ajudar candidatos à carta de condução a se prepararem para os testes teóricos em Moçambique. Possui quizzes por níveis, autenticação via Firebase e planos de assinatura, com backend em Node.js e perguntas armazenadas no Supabase.',
    stack: 'React, Node.js, Firebase, Supabase',
    link: 'https://unitymoz-draiva.web.app',
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
    stack: 'React, Node.js, jwt, mongoose, socket.io, mongodb, etc',
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
];

/**
 * ProjectsSection: Lista de projetos da UnityMoz
 * Cada projeto exibe ícone, nome, descrição, stack e link.
 * Inclui animação de fade-in nos cards com Framer Motion.
 */
function ProjectsSection() {
  return (
    <section id="projects" className="container py-5" role="region" aria-label="Projetos da UnityMoz">
      <h3 className="mb-4 fw-bold" style={{ color: '#e10600' }}>Projetos</h3>
      <div className="row g-4">
        {projects.map((project, idx) => {
          // Selo para projetos em desenvolvimento
          const isMain = project.name === 'Draiva' || project.name === 'Karingana';
          const badgeText = project.name === 'Djika Djika' ? 'Brevemente' : (!isMain ? 'Em desenvolvimento' : null);
          return (
            <motion.div
              className="col-md-6 col-lg-4"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.035, boxShadow: '0 12px 36px rgba(225,6,0,0.13)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card h-100 shadow-sm border-0 d-flex flex-column align-items-center text-center p-3">
                {/* Ícone representativo do projeto */}
                <i className={`${project.icon} fa-4x mb-3`} style={{ color: '#e10600' }} aria-hidden="true"></i>
                <div className="card-body p-0">
                  {/* Selo de status */}
                  {badgeText && (
                    <span className="badge bg-warning text-dark mb-2" style={{ fontWeight: 600, fontSize: '0.95rem' }}>{badgeText}</span>
                  )}
                  <h5 className="card-title fw-bold">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <span className="badge bg-secondary mb-2">{project.stack}</span>
                  <br />
                  {project.link !== '#' && (
                    <a href={project.link} className="btn btn-outline-danger btn-sm mt-2" target="_blank" rel="noopener noreferrer" aria-label={`Ver detalhes do projeto ${project.name}`}>Ver Projeto</a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection; 