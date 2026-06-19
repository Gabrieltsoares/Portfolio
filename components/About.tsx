export default function About() {
  return (
    <section id="sobre" aria-label="Sobre mim" className="py-24 px-6 relative bg-gradient-to-b from-[#111] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-pink-500"></span>
          Sobre Mim
        </h2>
        <div className="text-gray-400 space-y-6 text-lg leading-relaxed bg-[#151515]/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
          <p>
            Sou o Gabriel Teixeira, um <strong className="text-orange-400 font-medium">Desenvolvedor Full Stack</strong> apaixonado por criar soluções web eficientes e escaláveis. Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam por trás das telas, e rapidamente evoluiu para uma carreira focada na entrega de valor real aos usuários.
          </p>
          <p>
            Especializado no ecossistema <strong className="text-pink-400 font-medium">React, Node.js e PostgreSQL</strong>, tenho experiência no desenvolvimento de ponta a ponta: desde a modelagem de banco de dados robustos e criação de APIs RESTful estruturadas, até a construção de interfaces dinâmicas, responsivas e amigáveis (com ênfase em performance e acessibilidade).
          </p>
          <p>
            Estou sempre em busca de aprender novas tecnologias, aplicar as melhores práticas de código limpo (Clean Code) e contribuir em equipes colaborativas que prezem pela qualidade de software e inovação contínua.
          </p>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
