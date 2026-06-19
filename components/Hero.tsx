import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" aria-label="Introdução" className="min-h-screen flex items-center justify-center px-6 pt-20">

      {/* Neon Border Wrapper */}
      <div className="relative w-full max-w-6xl p-[2px] rounded-3xl 
                      bg-gradient-to-r 
                      from-orange-500 via-pink-500 to-purple-600 
                      animate-gradient">

        {/* Card Container */}
        <div className="relative bg-[#111] rounded-3xl px-12 py-20 shadow-2xl min-h-[70vh] flex items-center">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>
              <p className="text-orange-500 mb-4">— Olá</p>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Eu sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Gabriel Teixeira</span>
              </h1>

              <p className="text-gray-400 mb-8 text-lg">
                Desenvolvedor Full Stack construindo aplicações escaláveis com React, Node e PostgreSQL.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projetos" className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:-translate-y-1">
                  Ver Projetos
                </a>
                <a href="/curriculo.pdf" download className="inline-block bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:-translate-y-1 text-center">
                  Baixar Currículo
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center relative">

              <div className="w-72 h-72 rounded-full border-4 border-orange-500/30 relative overflow-hidden flex items-center justify-center bg-[#222]">
                <Image src="/avatar-anime.png" alt="Gabriel Teixeira Avatar" fill className="object-cover" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}