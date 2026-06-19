const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Acessibilidade/SEO"] },
  { category: "Backend", items: ["Node.js", "Express", "APIs RESTful", "Autenticação (JWT)"] },
  { category: "Banco de Dados", items: ["PostgreSQL", "Prisma ORM", "Modelagem de Dados"] },
  { category: "Ferramentas & DevOps", items: ["Git", "GitHub", "Figma", "Vercel"] }
];

export default function Skills() {
  return (
    <section id="habilidades" aria-label="Habilidades Técnicas" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-medium mb-3 tracking-widest uppercase text-sm">O que eu faço</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Habilidades</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gradient-to-b from-[#1a1a1a] to-[#111] border border-white/5 rounded-3xl p-8 hover:border-pink-500/30 transition-all group shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/5 pb-4 group-hover:text-pink-400 transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
