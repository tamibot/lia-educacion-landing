import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Producto', href: '#producto' },
    { name: 'Cómo Funciona', href: '#process' },
    { name: 'Resultados', href: '#solutions' },
    { name: 'Precios', href: '#precios' },
    { name: 'Plataforma', href: '#dashboard' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5 lg:py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className={`transition-all duration-500 ${isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
            : 'bg-transparent border-transparent'} border rounded-2xl px-6 py-3 md:px-8 md:py-4 flex items-center justify-between`}>

            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer z-50 relative group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">L</div>
              <span className="text-xl font-black tracking-tighter text-gray-900">LIA<span className="text-blue-600">.AI</span></span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[15px] font-medium text-gray-600 hover:text-blue-600 transition-all hover:-translate-y-0.5 relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 z-50 relative">
              <button
                onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20LIA%20Bot', '_blank')}
                className="hidden sm:flex text-white px-6 py-2.5 rounded-xl text-[15px] font-bold items-center gap-2 hover:opacity-90 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                Agendar Demo
              </button>

              <button
                className="lg:hidden p-3 text-gray-600 hover:text-gray-900 transition-all bg-white/50 hover:bg-white rounded-xl active:scale-95 border border-transparent hover:border-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 lg:hidden transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full pt-28 px-8 pb-10">
          <div className="flex-1 space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-2xl font-bold text-gray-900 border-b border-gray-100 pb-5 group"
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="group-hover:text-blue-600 transition-colors">{link.name}</span>
                <ChevronRight size={24} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          <div className="space-y-6">
            <button
              onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20LIA%20Bot', '_blank')}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              Empezar Ahora <ArrowRight size={20} />
            </button>
            <p className="text-center text-gray-400 text-sm font-medium">
              ¿Tienes dudas? <span onClick={() => window.open('https://wa.me/51995547575?text=Hola%20quisiera%20mas%20informaci%C3%B3n%20de%20LIA%20Bot', '_blank')} className="text-blue-600 font-bold cursor-pointer hover:underline">Hablemos por WhatsApp</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
