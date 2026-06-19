import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        <div className="text-center md:text-left">
          <a href="#inicio" className="text-3xl font-bold text-white tracking-tighter block mb-2 hover:opacity-80 transition-opacity">
            GT<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">.</span>
          </a>
          <p className="text-gray-500 text-sm max-w-xs">
            Construindo soluções web escaláveis com código limpo e foco no usuário.
          </p>
        </div>

        <address className="flex gap-6 not-italic">
          <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" 
             className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111] border border-white/5 text-gray-400 hover:text-white hover:border-pink-500/50 hover:-translate-y-1 transition-all shadow-lg aria-label='GitHub'">
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" 
             className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111] border border-white/5 text-gray-400 hover:text-white hover:border-blue-500/50 hover:-translate-y-1 transition-all shadow-lg aria-label='LinkedIn'">
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:seu.email@exemplo.com" 
             className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111] border border-white/5 text-gray-400 hover:text-white hover:border-orange-500/50 hover:-translate-y-1 transition-all shadow-lg aria-label='E-mail'">
            <span className="sr-only">E-mail</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </address>

      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Gabriel Teixeira. Todos os direitos reservados.</p>
        <p>Desenvolvido com Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
