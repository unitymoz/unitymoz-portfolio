import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiExpo, SiSupabase } from 'react-icons/si';

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

// Função utilitária para mapear stacks para ícones
const stackIcons = {
  'React': <FaReact size={22} color="#61dafb" title="React" style={{ marginRight: 4 }} />,
  'Node.js': <FaNodeJs size={22} color="#3c873a" title="Node.js" style={{ marginRight: 4 }} />,
  'Firebase': <SiFirebase size={22} color="#ffca28" title="Firebase" style={{ marginRight: 4 }} />,
  'Supabase': <SiSupabase size={22} color="#3ecf8e" title="Supabase" style={{ marginRight: 4 }} />,
  'MongoDB': <SiMongodb size={22} color="#47a248" title="MongoDB" style={{ marginRight: 4 }} />,
  'jwt': <FaJs size={22} color="#f7df1e" title="JWT" style={{ marginRight: 4 }} />,
  'mongoose': <FaJs size={22} color="#f7df1e" title="Mongoose" style={{ marginRight: 4 }} />,
  'socket.io': <FaJs size={22} color="#f7df1e" title="Socket.io" style={{ marginRight: 4 }} />,
  'React Native': <FaReact size={22} color="#61dafb" title="React Native" style={{ marginRight: 4 }} />,
  'Expo': <SiExpo size={22} color="#000" title="Expo" style={{ marginRight: 4 }} />,
  'Git': <FaGitAlt size={22} color="#f34f29" title="Git" style={{ marginRight: 4 }} />,
  'JavaScript': <FaJs size={22} color="#f7df1e" title="JavaScript" style={{ marginRight: 4 }} />,
  'HTML5': <FaHtml5 size={22} color="#e34c26" title="HTML5" style={{ marginRight: 4 }} />,
  'CSS3': <FaCss3Alt size={22} color="#1572b6" title="CSS3" style={{ marginRight: 4 }} />,
};

// Setas customizadas estilo terminal
const ArrowLeft = (props) => (
  <button {...props} style={{ ...props.style, background: 'none', border: 'none', position: 'absolute', left: -36, top: '45%', zIndex: 2, fontSize: 28, color: '#ff4d4d', cursor: 'pointer', fontFamily: 'monospace', transition: 'color 0.2s' }} aria-label="Projeto anterior">
    <FaChevronLeft />
  </button>
);
const ArrowRight = (props) => (
  <button {...props} style={{ ...props.style, background: 'none', border: 'none', position: 'absolute', right: -36, top: '45%', zIndex: 2, fontSize: 28, color: '#ff4d4d', cursor: 'pointer', fontFamily: 'monospace', transition: 'color 0.2s' }} aria-label="Próximo projeto">
    <FaChevronRight />
  </button>
);

/**
 * ProjectsSection: Lista de projetos da UnityMoz
 * Cada projeto exibe ícone, nome, descrição, stack e link.
 * Inclui animação de fade-in nos cards com Framer Motion.
 */
function ProjectsSection() {
  return (
    <section id="projects" className="container py-5" role="region" aria-label="Projetos da UnityMoz">
      {/* Terminal simulado */}
      <div style={{
        background: '#181c20', color: '#e5e5e5', borderRadius: 10, padding: '16px 20px', marginBottom: 28, fontFamily: 'monospace', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', maxWidth: 480, margin: '0 auto 28px auto'
      }}>
        <span style={{ color: '#00ff90' }}>$</span> <Typewriter
          words={[
            'npm run projetos',
            'Compilando portfólio... ✔',
            'Mostrando projetos UnityMoz:',
          ]}
          loop={0}
          cursor
          cursorStyle='█'
          typeSpeed={55}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </div>
      <h3 className="mb-4 fw-bold" style={{ color: '#e10600' }}>Projetos</h3>
      {/* Carrossel de projetos */}
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
        aria-label="Carrossel de projetos"
      >
        {projects.map((project, idx) => {
          const isMain = project.name === 'Draiva' || project.name === 'Karingana';
          const badgeText = project.name === 'Djika Djika' ? 'Brevemente' : (!isMain ? 'Em desenvolvimento' : null);
          return (
            <div key={idx} style={{ padding: 12 }}>
              <div className="card h-100 shadow-sm border-0 d-flex flex-column align-items-center text-center p-3" style={{ background: '#23272e', color: '#fff', fontFamily: 'monospace', minHeight: 420, transition: 'transform 0.4s, opacity 0.4s' }}>
                <i className={`${project.icon} fa-4x mb-3`} style={{ color: '#e10600' }} aria-hidden="true"></i>
                <div className="card-body p-0">
                  {badgeText && (
                    <span className="badge bg-warning text-dark mb-2" style={{ fontWeight: 600, fontSize: '0.95rem' }}>{badgeText}</span>
                  )}
                  <h5 className="card-title fw-bold" style={{ color: '#ff4d4d' }}>{project.name}</h5>
                  <p className="card-text" style={{ minHeight: 80 }}>{project.description}</p>
                  <span className="mb-2 d-flex justify-content-center align-items-center gap-1" style={{ flexWrap: 'wrap', minHeight: 28 }}>
                    {/* Badges de stacks */}
                    {project.stack.split(',').map((tech, i) => (
                      <span key={i} style={{ display: 'inline-flex', alignItems: 'center', marginRight: 2 }}>
                        {stackIcons[tech.trim()]}
                      </span>
                    ))}
                  </span>
                  <br />
                  {project.link !== '#' && (
                    <a href={project.link} className="btn btn-outline-danger btn-sm mt-2" target="_blank" rel="noopener noreferrer" aria-label={`Ver detalhes do projeto ${project.name}`}>Ver Projeto</a>
                  )}
                  {/* Botão Ver código se for link do GitHub */}
                  {project.link && project.link.includes('github.com') && (
                    <a href={project.link} className="btn btn-outline-light btn-sm mt-2 ms-2" target="_blank" rel="noopener noreferrer" aria-label={`Ver código fonte do projeto ${project.name}`}>Ver código</a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

export default ProjectsSection;