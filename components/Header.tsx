import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#111]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="#inicio" className="text-2xl font-bold text-white tracking-tighter">
          GT<span className="text-orange-500">.</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-gray-300">
            <li><a href="#inicio" className="hover:text-orange-500 transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-orange-500 transition-colors">Sobre</a></li>
            <li><a href="#habilidades" className="hover:text-orange-500 transition-colors">Habilidades</a></li>
            <li><a href="#projetos" className="hover:text-orange-500 transition-colors">Projetos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
