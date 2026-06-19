import React from 'react';

const projects = [
  {
    title: "Projeto Demonstrativo 1",
    description: "Espaço reservado. Sistema de gestão construído com a stack completa para otimizar processos internos.",
    tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Projeto Demonstrativo 2",
    description: "Espaço reservado. Plataforma SaaS com autenticação robusta e integração de pagamentos.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Projeto Demonstrativo 3",
    description: "Espaço reservado. Aplicação em tempo real utilizando WebSockets focada em performance e escalabilidade.",
    tech: ["React", "Express", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  return (
    <section id="projetos" aria-label="Projetos Desenvolvidos" className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111] relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-pink-500 font-medium mb-3 tracking-widest uppercase text-sm">Portfólio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Projetos</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article key={index} className="group flex flex-col bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 shadow-2xl hover:-translate-y-2">
              
              {/* Image Placeholder */}
              <div className="h-56 bg-gradient-to-tr from-[#1a1a1a] to-[#222] w-full relative group-hover:from-[#222] group-hover:to-[#2a2a2a] transition-colors flex items-center justify-center p-6 text-center">
                <span className="text-gray-500/70 text-sm font-medium">Imagem ou Representação do Projeto</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-[#0a0a0a]">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs font-semibold text-gray-300 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                     className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 text-white py-3 rounded-xl text-sm font-semibold transition-opacity shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span>Deploy</span>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                     className="flex-1 flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#222] text-white py-3 rounded-xl text-sm font-semibold transition-colors border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>Repositório</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
